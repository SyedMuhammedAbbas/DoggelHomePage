import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Section4.css'
import sample from '../Images/sample.jpg'
import ReactSimplyCarousel from 'react-simply-carousel';
import SliderBack from "../Images/SliderBack.png"
import SliderFront from "../Images/SliderFront.png"
import Section4Content from "./Section4Content";

function Section4() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const settings = {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <>
            <div className="Profile-Section4" >

                <div className="Profile-Section4-Sildes-Content">
                    <div className="Profile-Section4-Slides-Content-Heading">
                        Continue Reading | <span>For Sarah</span>
                    </div>

                    <div className="Section4-Slider-With-Arrows">
                        <ReactSimplyCarousel
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={1}
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
                                    marginTop: 150,
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
                                    marginTop: 150,
                                    marginRight: 40
                                },
                                children: <div><img src={SliderBack}></img></div>
                            }}

                            speed={400}
                            easing="linear"
                        >
                            {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                            <div className="CarouselDiv"><Section4Content /></div>
                            <div className="CarouselDiv"><Section4Content /></div>
                            <div className="CarouselDiv"><Section4Content /></div>
                        </ReactSimplyCarousel>
                    </div>

                    <div className="Section4-Slider-WithOut-Arrows">
                        <ReactSimplyCarousel
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={1}
                            itemsToScroll={1}

                            forwardBtnProps={{
                                //here you can also pass className, or any other button element attributes

                                style: {
                                    display: 'none'
                                },
                                children: <div></div>
                            }}

                            backwardBtnProps={{
                                //here you can also pass className, or any other button element attributes
                                style: {
                                    display: 'none'
                                },
                                children: <div></div>
                            }}

                            speed={400}
                            easing="linear"
                        >
                            {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                            <div className="CarouselDiv"><Section4Content /></div>
                            <div className="CarouselDiv"><Section4Content /></div>
                            <div className="CarouselDiv"><Section4Content /></div>
                        </ReactSimplyCarousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section4;