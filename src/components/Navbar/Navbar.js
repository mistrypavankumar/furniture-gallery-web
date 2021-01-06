import React from 'react'
import NavbarDetails from '../../data/NavbarDetails';
import './Navbar.css';

const Navbar = () => {

    const getdata = (data, index) => {
        return (
            <li className = "nav-links" key = {data.id}>
                <a href={data.path}> {data.menu}</a>
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
