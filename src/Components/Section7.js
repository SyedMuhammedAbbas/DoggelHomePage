import React, { useState } from "react";
import ViewallArrowBlack from '../Images/ViewallArrowBlack.png';
import ViewallArrow from '../Images/ViewallArrow.png'
import sample from '../Images/sample.jpg'
import './Section7.css'

function Section7() {

    const n = 3;

    return (

        <>
            <div className="Profile-Section7">
                <div className="Profile-Section7-Top">
                    <div className="Profile-Section7-Top-Heading">
                        My Favourites
                    </div>

                    <div className="Profile-Section7-Button">
                        <button> View all <img className="button7-image" src={ViewallArrowBlack}></img></button>
                    </div>
                </div>

                <div className="Profile-Section7-Main">

                    {[...Array(n)].map((e, i) =>
                        <div className="Profile-Section7-Main2">
                            <div className="Profile-Section7-Sildes-Heading ">
                                <img src={sample}>
                                </img>
                                <div className="Profile-Section7-Sildes-Heading1">
                                    Mi, diam hendricks...<br />
                                    <span>James Warner xyz</span>
                                </div>
                            </div>
                            <div className="Profile-Section7-Buttons">

                                <button>Remove<img className="button7-remove-image" src={ViewallArrow}></img></button>
                                <button>Continue Reading<img className="button7-continue-image" src={ViewallArrow}></img></button>

                            </div>
                        </div>)}


                </div>
            </div>
        </>

    );
}

export default Section7;