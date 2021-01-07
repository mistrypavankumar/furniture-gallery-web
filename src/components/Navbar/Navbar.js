import React from 'react'
import NavbarDetails from '../../data/NavbarDetails';
import './Navbar.css';

import {Link} from 'react-router-dom'

const Navbar = () => {

    const getdata = (data, index) => {
        return (
            <li className = "nav-links" key = {data.id}>
                <Link to = {data.path}> {data.menu}</Link>
            </li>
        );

    }
    return (
        <>
          <nav>
              <ul>
                  {NavbarDetails.map(getdata)}
              </ul>
          </nav>  
        </>
    )
}


export default Navbar;
