import React from "react";
import './Section1.css'

function Section1() {
    return (
        <>
            <div className="Profile-Section1" >

                <div>
                    <div className="Profile-Section1-Heading">
                        Learn Anything, <br />
                        Anywhere and <br />
                        Accelerate Future
                    </div>

                    <div className='search search-child'>
                        <form >
                            <input
                                type="text"
                                placeholder="Type ypur brain out to explore something new..."

                            />

                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Section1;