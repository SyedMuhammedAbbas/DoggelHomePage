import React from "react";
import './Section5.css';
import Robot from '../Images/robot.png'

function Section5Content() {
    return (
        
            <div className="Profile-Section5-Main">

                <div className="Profile-Section5-Main2">
                    <div className="Profile-Section5-Main-Child">
                        <img src={Robot}></img>
                    </div>

                    <div className="Profile-Section5-Main-Child">
                        <img src={Robot}></img>
                    </div>
                </div>


            </div>
        
    )
}

export default Section5Content;