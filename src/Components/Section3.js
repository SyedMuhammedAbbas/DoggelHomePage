import React, { useState } from "react";
import './Section3.css'
import ViewallArrow from '../Images/ViewallArrow.png'
import sample from '../Images/sample.jpg'

function Section3() {

    const [oneShow, setoneShow] = useState(true);
    const [twoShow, settwoShow] = useState(false);
    const [threeShow, setthreeShow] = useState(false);
    const [fourShow, setfourShow] = useState(false);
    const [fiveShow, setfiveShow] = useState(false);
    const [sixShow, setsixShow] = useState(false);
    const [sevenShow, setsevenShow] = useState(false);
    const [eightShow, seteightShow] = useState(false);

    function One() {
        setoneShow(true);
        settwoShow(false);
        setthreeShow(false);
        setfourShow(false);
        setfiveShow(false);
        setsixShow(false);
        setsevenShow(false);
        seteightShow(false);
    }
    function Two() {
        setoneShow(false);
        settwoShow(true);
        setthreeShow(false);
        setfourShow(false);
        setfiveShow(false);
        setsixShow(false);
        setsevenShow(false);
        seteightShow(false);
    }
    function Three() {
        setoneShow(false);
        settwoShow(false);
        setthreeShow(true);
        setfourShow(false);
        setfiveShow(false);
        setsixShow(false);
        setsevenShow(false);
        seteightShow(false);
    }
    function Four() {
        setoneShow(false);
        setthreeShow(false);
        settwoShow(false);
        setfourShow(true);
        setfiveShow(false);
        setsixShow(false);
        setsevenShow(false);
        seteightShow(false);
    }
    function Five() {
        setoneShow(false);
        setthreeShow(false);
        setfourShow(false);
        settwoShow(false);
        setfiveShow(true);
        setsixShow(false);
        setsevenShow(false);
        seteightShow(false);
    }
    function Six() {
        setoneShow(false);
        setthreeShow(false);
        setfourShow(false);
        setfiveShow(false);
        settwoShow(false);
        setsixShow(true);
        setsevenShow(false);
        seteightShow(false);
    }
    function Seven() {
        setoneShow(false);
        setthreeShow(false);
        setfourShow(false);
        setfiveShow(false);
        setsixShow(false);
        settwoShow(false);
        setsevenShow(true);
        seteightShow(false);
    }
    function Eight() {

        setoneShow(false);
        setthreeShow(false);
        setfourShow(false);
        setfiveShow(false);
        setsixShow(false);
        setsevenShow(false);
        settwoShow(false);
        seteightShow(true)
    }

    return (
        <>
            {/* SECTION 3 */}

            <div className="Profile-Section3">
                <div className="Profile-Section3-Button">
                    <button onClick={() => One()} className="one">1</button>
                    <button onClick={() => Two()} className="two">2</button>
                    <button onClick={() => Three()} className="three">3</button>
                    <button onClick={() => Four()} className="four">4</button>
                    <button onClick={() => Five()} className="five">5</button>
                    <button onClick={() => Six()} className="six">6</button>
                    <button onClick={() => Seven()} className="seven">7</button>
                    <button onClick={() => Eight()} className="eight">8</button>
                </div>

                <div className="Profile-Section3-Slides">
                    <div className="Profile-Section3-Slides-Digits">
                        {oneShow && 1}
                        {twoShow && 2}
                        {threeShow && 3}
                        {fourShow && 4}
                        {fiveShow && 5}
                        {sixShow && 6}
                        {sevenShow && 7}
                        {eightShow && 8}
                    </div>

                    {oneShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {twoShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {threeShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {fourShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {fiveShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {sixShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {sevenShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}

                    {eightShow && <div className="Profile-Section3-Sildes-Content">
                        <div className="Profile-Section3-Sildes-Heading">
                            <img src={sample}>
                            </img>
                            <div className="Profile-Section3-Sildes-Heading1">
                                Mi, diam hendricks...<br />
                                <span>James Warner xyz</span>
                            </div>
                        </div>
                        <div className="Profile-Section3-Sildes-Para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="Profile-Section3-Slide-Button">
                            <button>Continue Reading<img className="button-image" src={ViewallArrow}></img></button>
                        </div>
                    </div>}



                </div>
            </div>
        </>


    )
}

export default Section3;