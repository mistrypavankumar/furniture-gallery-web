import React from 'react';
import './Login.css';

const Login = () => {


    return (
        <>
            
            <div className="modal__ animateModal" id="id01">
                <h1>Admin Login</h1>
                <div className = "borderanimation"></div>
                <form className = "model_content" autoComplete = "off">
                    <label className = "__formLabel" htmlFor="email"><b>Admin Email</b></label>
                    <input type="email" placeholder="Admin email" name="email" required/>
                    <label className = "__formLabel" htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Password" name ="psw"  required/>

                    <button className = "loginBtn">Log In</button>
                </form>
            </div>

            
        </>
    );
}

export default Login;