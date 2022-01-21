import React from 'react';

const Hero_section = () => {
    return(
        <div>
            <div class = "background-container">
                <div className="container-center">
                    <div class="hero-section">
                        <div class="header">
                            <div class="container-center">
                                <nav class="header-nav">
                                    <div class="logo">LOGO</div>
                                    <div class="navigations">
                                        <div class="navigation">Home</div>
                                        <div class="navigation">About</div>
                                        <div class="navigation">Team</div>
                                        <div class="navigation active--nav">Contact</div>
                                    </div>
                                </nav>
                            </div>
                            <div class="header-container">
                                <div class="header-container-inner header-info">
                                    <h1>DEFINITIVE CONSUMER DATA FOR TECHNOLOGY</h1>
                                    <p>
                                        Audience intelligence, brand trackers, reports and articles – compiled using 25,000 data variables from the YouGov Cube.
                                    </p>
                                    <div class="hero--btns">
                                        <button class="btn large--btn hero--left--btn">Try the YouGov Platform</button>
                                        <button class="btn large--btn hero--right--btn">Launch a Survey</button>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_section;
