import React from "react";
import './Section4.css';
import sample from '../Images/sample.jpg'

function Section4Content() {
    return (
        <>
            <div className="Profile-Section4-Slides-Content-Chid2">
                <div className="Profile-Section4-Slides-Content-Child">
                    <div className="Profile-Section4-Sildes-Heading">
                        <img src={sample}>
                        </img>
                        <div className="Profile-Section4-Sildes-Heading1">
                            The Modern Disease of <br />not paying attention<br />
                            <span>John P.McDonalds</span>
                        </div>
                    </div>
                    <div className="Profile-Section4-Slides-Buttons">
                        <button>Open</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className="Profile-Section3-Sildes-Para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </>


    )
}

export default Section4Content;