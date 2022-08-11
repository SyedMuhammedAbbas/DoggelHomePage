import React from "react";
import './Home.css';
import PlayStore from "../Logo/Playstore-logo.png"
import AppStore from "../Logo/Appstore-logo.png"
import Sampleimg from '../Images/sample-image.jpg'
import Mobile from '../Images/mobile.png'
import logo from '../Images/logo.png'

function Home() {
    return (
        <>
        <div className="Home">
            <div className="Home-Header">
                <div className="Home-Header-Logo">
                    <img src={logo}></img>
                    <h2 className="Home-Header-Heading">
                        Doggel
                    </h2>
                </div>

                <ul className="Home-Header-items">
                    <li>
                        What is Doggel?
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Contribute
                    </li>
                    <li>
                        Sign In
                    </li>
                </ul>
            </div>

            <div className="Home-Section">
                <div className="Home-Content">
                    <div className="Home-Section-Content">
                        <div className="Home-Section-Heading">
                            Share more, <br />
                            To learn more
                        </div>

                        <p className="Home-Section-Para">
                            Best Collection of researches - <br />
                            Thesis Collection,<br />
                            Tech Huntings, and much more...

                            <br />
                            <br />

                            One subscription. No ads.<br />
                            No in-app purchases.
                        </p>

                        <div className="Home-Section-Button">

                            <button>Free 30-Day Trial</button>

                            <button>View Plans</button>

                        </div>

                    </div>

                    <hr className="Home-Line"/>

                    <div>
                        <div className="Home-Footer">
                            <div className="Home-Footer-mobile-app">

                                <img src={Mobile}></img>
                                <p> For accessing <span>Doggel,</span> on-the-go, <br /> download the mobile App.</p>

                            </div>
                            <div className="Home-Footer-Logo-Image">
                                <img src={PlayStore}></img>
                                <img src={AppStore}></img>
                            </div>
                        </div>

                        <div className="Home-Footer-copyright">
                            <ul className="Home-Footer-copyright-ul">
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

                            <div className="Home-Footer-All-reserved">All rights reserved, Doggel,Inc.2022</div>
                        </div>
                    </div>
                </div>

                <div className="Home-Sample-Image">
                    <img src={Sampleimg}></img>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home;