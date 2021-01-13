import React, {useState} from 'react'
import NavbarDetails from '../../data/NavbarDetails';
import './Navbar.css';

import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);

    const getdata = (data, index) => {
        return (
            <li className = "nav-links" key = {data.id}>
                <Link onClick = {handleToggle} to = {data.path}> {data.menu}</Link>
            </li>
        );

    }

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }
    return (
        <>
             <div id="top" className="menuToggle" onClick = {handleToggle}>
                    <i className="fas fa-bars"></i>
            </div>
            <div className = {isToggle ? "menubar act_toggle": "menubar"}>
                <ul>
                     {NavbarDetails.map(getdata)}
                    <Link className ="adminBtn_link" to = "/adminlogin">Admin Login</Link>
                </ul>
            </div>
          <nav id = "top">
              <ul>
                  {NavbarDetails.map(getdata)}
                  <li className = "adminBtn">
                      <Link className ="adminBtn_link" to = "/adminlogin">Admin Login</Link>
                  </li>
              </ul>
          </nav>  
        </>
    )
}


export default Navbar;
