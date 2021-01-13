import React from 'react'
import './Footer.css'

import { Link } from "react-router-dom";

export default function Footer() {

  
    return (
        <div className="footerContainer">
            <footer>
                <div className="leftcontent">
                    <div className="logo">
                        <h3>Bhole Shankar Furniture</h3>
                    </div>
                    <div className="desc">
                        <p>Welcome to Bhole Shankar Furnites.
                        Here you will find awesome furnitures which were made
                    in our wooden work shop.</p>
                    </div>
                </div>

                <div className="centercontent">
                    <div className="usefulLinks">
                        <h3>UseFul Links</h3>
                    </div>
                    <div className="Links_">
                        <ul>
                            <li className="items"><a href="#top">Home</a></li>
                            <li className="items"><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="rightcontent">
                    <div className="contact">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="desc">
                       <p>#7-3-17, Sagar Ring Road. Beside Ragistration Office,Beside Srirama Dharmakanta .</p>
                    </div>
                </div>
            </footer>
            <div className="footer_cp">
                <p>© {(new Date().getFullYear())} All Rights Reserved. Created by <span className = "developerName">Mistry Pavan Kumar</span></p>
            </div>
        </div>
    )
}
