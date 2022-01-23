import React from 'react';

const Hero_section = () => {
    return(
        <div>
            <nav class="header-nav">
                <div class="logo">LOGO</div>
                <div class="navigations">
                    <a href="#" class="navigation">Home</a>
                    <a href="#" class="navigation">About</a>
                    <a href="#" class="navigation">Team</a>
                    <a href="#" class="navigation active--nav">Contact</a>
                </div>
                <div class="navigations-responsive">
                    <div class="nav-bar active--nav">Nav</div>
                    <div class="nav-bar-items">
                        <a href="#" class="navigation navigation-res">Home</a>
                        <a href="#" class="navigation navigation-res">About</a>
                        <a href="#" class="navigation navigation-res">Team</a>
                        <a href="#" class="navigation navigation-res">Contact</a>
                    </div>
                </div>
            </nav>
            <div class = "background-container">
                    <div class="hero-section">
                        <div class="header">
                            <div class="header-container container-center">
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
    )
}

export default Hero_section;
