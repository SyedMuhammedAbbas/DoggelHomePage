import React from "react";
import './Section2.css'
import Stockarrow from '../Images/Stockarrow.png'
import ViewallArrow from '../Images/ViewallArrow.png'


function Section2() {
    return (
        <>
            <div className="Profile-Section2">
                <div className="Profile-Section2-Text">
                    <div className="Profile-Section2-Text-Heading">
                        Trending Now
                        <br />
                        <div className="Profile-Section2-Text-Heading2">See what others are loving today !</div>
                    </div>
                    <div className="Profile-Section2-Text-Heading-Image">
                        <img src={Stockarrow}>
                        </img>
                    </div>
                </div>

                <div className="Profile-Section2-Button">
                    <button> View all <img className="button-image" src={ViewallArrow}></img></button>
                </div>
            </div>
        </>

    )
}

export default Section2;