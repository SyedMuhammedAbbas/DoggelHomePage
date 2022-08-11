import React, { useState, useEffect } from "react";

import './Profile.css'

import Whitebackground from '../Images/Whitebackground.jpg'
import 'react-slideshow-image/dist/styles.css'
import Section5 from "./Section5";
import Section4 from "./Section4";
import Section3 from "./Section3";
import Section7 from "./Section7";
import Footer from "./Footer";
import Section6 from "./Section6";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Header from "./Header";



function Profile() {

    
    const m = 14;

    

    return (
        <>
            <div className="Profile">


                {/* HEADER */}
                <Header />
                



                {/* SECTION 1 */}
                <Section1 />
                
                



                {/* SECTION 2 3 4 5 6 7 */}
                <div className="Profile-Background" style={{ backgroundImage: `url(${Whitebackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>



                    {/* SECTION 2 */}
                    <Section2 />
                    





                    {/* SECTION 3 */}
                    <Section3 />




                    {/* SECTION 4 */}
                    <Section4 />
                    

                    


                    {/* SECTION 5 */}
                    <Section5/>
                    



                    {/* SECTION 6 */}
                    <Section6 />
                    




                    {/* SECTION 7 */}
                    <Section7/>
                    



                    {/* Profile Footer */}
                    <Footer/>


                </div>


            </div>

        </>
    )
}

export default Profile;