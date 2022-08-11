import React from "react";
import search from '../Images/search.png'
import logo from '../Images/logo.png'
import './Header.css'

function Header() {
    return (
        <>
            <div className="Home-Header">
                <div className="Home-Header-Logo">
                    <img src={logo}></img>
                    <h2 className="Home-Header-Heading">
                        Doggel
                    </h2>
                </div>

                <ul className="Home-Header-items">
                    <li className="Profile-Header-Image">
                        <img src={search}></img>
                    </li>

                    <li className="Profile-Header-Name">
                        Sarah
                    </li>
                    <li>
                        <div className="container" >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;