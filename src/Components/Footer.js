import React from "react";
import './Footer.css'
import PlayStore from "../Logo/Playstore-logo.png"
import AppStore from "../Logo/Appstore-logo.png"
import logoGray from '../Images/logoGray.png'


function Footer() {
    return (
        <>
            <div className="Profile-Footer">
                <div className="Profile-Footer-Child">
                    <div className="Profile-Footer-Content Footer-Mobile-App">
                        <div className="Profile-Footer-Logo-Image">
                            <a><img src={PlayStore}></img></a>
                            <a><img src={AppStore}></img></a>
                        </div>
                        <div className="Profile-Footer-Content-Para">
                            For accessing <span>Doggel,</span> on-the-go, <br /> download the mobile App.

                        </div>
                    </div>

                    <div className="Profile-Footer-Child1 Footer-Logo">
                        <div className="Profile-Footer-Child1-Image">
                            <img src={logoGray}></img>
                        </div>
                        <div className="Profile-Footer-Child1-Heading">
                            DOGGEL
                        </div>
                    </div>
                </div>

                <div className="Profile-Footer-copyright">
                    <ul className="Profile-Footer-copyright-ul">
                        <li>
                            About.
                        </li>
                        <li>
                            Privacy.
                        </li>
                        <li>
                            Terms.
                        </li>
                        <li>
                            Contact.
                        </li>

                    </ul>

                    <div className="Profile-Footer-All-reserved">All rights reserved, Doggel,Inc.2022</div>
                </div>
            </div>
        </>
    )
}

export default Footer;