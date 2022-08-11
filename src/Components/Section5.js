import React, { useState } from "react";
import Robot from '../Images/robot.png'
import './Section5.css'
import Section5Content from "./Section5Content";
import ReactSimplyCarousel from 'react-simply-carousel';
import SliderBack from "../Images/SliderBack.png"
import SliderFront from "../Images/SliderFront.png"
import ViewallArrow from '../Images/ViewallArrow.png'

function Section5() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const settings = {
        slidesToShow: 1,
        // centerMode: true,
        // centerPadding: '60px',
        dots: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <>
            <div className="Profile-Section5">
                <div className="Profile-Section5-Top">
                    <div className="Profile-Section5-Top-Heading">
                        Explore something <br></br >new today !
                    </div>
                    <div className="Profile-Section5-Top-Button">
                        <button>View all Categories <img className="button5-image" src={ViewallArrow}></img></button>
                    </div>
                </div>


                <div className="Slider-5">
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={7}
                        itemsToScroll={1}

                        forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes

                            style: {
                                alignSelf: 'center',
                                background: 'Transparent',
                                border: 'none',
                                // borderRadius: '50%',
                                color: 'Black',
                                cursor: 'pointer',
                                fontSize: '20px',
                                // height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                // width: 30,
                                marginTop: 40,
                                marginLeft: 40
                            },
                            children: <div><img src={SliderFront}></img></div>
                        }}

                        backwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                alignSelf: 'center',
                                background: 'Transparent',
                                border: 'none',
                                // borderRadius: '50%',
                                color: 'Black',
                                cursor: 'pointer',
                                fontSize: '20px',
                                // height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                // width: 30,
                                marginTop: 40,
                                marginRight: 40
                            },
                            children: <div><img src={SliderBack}></img></div>
                        }}

                        responsiveProps={[
                            {
                                itemsToShow: 7,
                                itemsToScroll: 1,
                                maxWidth:2000,
                                minWidth: 1700,
                            },
                            {
                                itemsToShow: 6,
                                itemsToScroll: 1,
                                maxWidth:1680,
                                minWidth: 1500,
                            },
                            {
                                itemsToShow: 5,
                                itemsToScroll: 1,
                                maxWidth:1500,
                                minWidth: 1400,
                            },
                            {
                                itemsToShow: 4,
                                itemsToScroll: 1,
                                maxWidth:1400,
                                minWidth: 1200,
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                maxWidth:1200,
                                minWidth: 950,
                            },
                            {
                                itemsToShow: 2,
                                itemsToScroll: 1,
                                maxWidth:950,
                                minWidth: 600,
                            },
                            {
                                itemsToShow: 1,
                                itemsToScroll: 1,
                                maxWidth:600,
                                minWidth: 400,
                            }

                        ]}



                        speed={400}
                        easing="linear"
                    >
                        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                    </ReactSimplyCarousel>

                </div>
                <div className="Slider-5-1">
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={7}
                        itemsToScroll={1}

                        forwardBtnProps={{
                            //here you can also pass className, or any other button element attributes

                            style: {
                                display:'none'
                            },
                            children: <div></div>
                        }}

                        backwardBtnProps={{
                            //here you can also pass className, or any other button element attributes
                            style: {
                                display:'none'
                            },
                            children: <div></div>
                        }}

                        responsiveProps={[
                            {
                                itemsToShow: 7,
                                itemsToScroll: 1,
                                maxWidth:2000,
                                minWidth: 1700,
                            },
                            {
                                itemsToShow: 6,
                                itemsToScroll: 1,
                                maxWidth:1680,
                                minWidth: 1500,
                            },
                            {
                                itemsToShow: 5,
                                itemsToScroll: 1,
                                maxWidth:1500,
                                minWidth: 1400,
                            },
                            {
                                itemsToShow: 4,
                                itemsToScroll: 1,
                                maxWidth:1400,
                                minWidth: 1200,
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                maxWidth:1200,
                                minWidth: 950,
                            },
                            {
                                itemsToShow: 3,
                                itemsToScroll: 1,
                                maxWidth:950,
                                minWidth: 500,
                            },
                            {
                                itemsToShow: 2,
                                itemsToScroll: 1,
                                maxWidth:500,
                                minWidth: 350,
                            }

                        ]}



                        speed={400}
                        easing="linear"
                    >
                        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                        <div className="CarouselDiv"><Section5Content /></div>
                    </ReactSimplyCarousel>

                </div>
            </div>

        </>

    );
}

export default Section5;