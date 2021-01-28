import React, { Component } from "react";
import "./Login.css";
import { projectFirestore, auth } from "./../../firebase/config";
import Navbar from "../../components/Navbar/Navbar";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      show_progres: false,
    };

    this.handlechange = this.handlechange.bind();
    this.login = this.login.bind();
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();

    let valid_data = true;
    this.state.email_error = null;
    this.state.password_error = null;

    if (this.state.email === "") {
      this.state.email_error = "Required!*";
      valid_data = false;
    }

    if (this.state.password === "") {
      this.state.password_error = "Required!*";
      valid_data = false;
    }

    if (valid_data) {
      this.state.show_progres = true;
    }
    this.setState({
      update: true,
    });

    if (valid_data) {
      projectFirestore
        .collection("user")
        .where("email", "==", this.state.email)
        .where("isAdmin", "==", true)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            auth
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then((res) => {
                this.props.history.replace("/dashboard");
              })
              .catch((err) => {
                if (err.code === "auth/wrong-password") {
                  this.state.password_error = "Incorrect Password!";
                }
                this.setState({
                  show_progres: false,
                });
              });
          } else {
            this.state.email_error = "Not Allowed!";
            this.setState({
              show_progres: false,
            });
          }
        });
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="mobel_container">
          <div className="modal__ animateModal" id="id01">
            <form className="model_content" method="post">
              <h1>Admin Login</h1>
              <div className="borderanimation"></div>
              <label className="__formLabel" htmlFor="email">
                <b>Admin Email</b>
              </label>
              <input
                type="email"
                placeholder="Admin email"
                name="email"
                onChange={this.handlechange}
              />
              {this.state.email_error != null && (
                <div style={{ color: "red", fontSize: "1rem" }}>
                  {this.state.email_error}
                </div>
              )}{" "}
              <label className="__formLabel" htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handlechange}
              />
              {this.state.password_error != null && (
                <div style={{ color: "red", fontSize: "1rem" }}>
                  {this.state.password_error}
                </div>
              )}
              <button className="loginBtn" onClick={this.login}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
