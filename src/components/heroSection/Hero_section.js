import React, {useState} from 'react';
import "./Hero_section.css";
import hamburgerIcon from '../../images/list.png';


const Hero_section = () => {

    const [isShowHamNav, ShowHamNav] = useState(false)

        const toogleHamNav = () => {
            if (isShowHamNav === false){
                ShowHamNav(true)
            }
            else{
                ShowHamNav(false)
            }
        }
    return(
        <div>
            <nav className="header-nav">
                <div className="logo">LOGO</div>
                <div className="navigations">
                    <a href="#" className="navigation">Home</a>
                    <a href="#" className="navigation">About</a>
                    <a href="#" className="navigation">Team</a>
                    <a href="#" className="navigation active--nav">Contact</a>
                </div>
                    <div className="hamburger-head" onClick={toogleHamNav}><img src={hamburgerIcon} width = "28px"/></div>
                <div className={!isShowHamNav ?"hamburger-nav-desktop" : "hamburger-nav-mobile"}>
                    <div className="nav-bar-items">
                        <a href="#" className="ham-nav-item">Home</a>
                        <a href="#" className="ham-nav-item">About</a>
                        <a href="#" className="ham-nav-item">Team</a>
                        <a href="#" className="ham-nav-item">Contact</a>
                    </div>
                </div>
            </nav>
            <div className = "background-container">
                    <div className="hero-section">
                        <div className="header">
                            <div className="header-container container-center">
                                <div className="header-container-inner header-info">
                                    <h1>DEFINITIVE CONSUMER DATA FOR TECHNOLOGY</h1>
                                    <p>
                                        Audience intelligence, brand trackers, reports and articles – compiled using 25,000 data variables from the Newsy Cube.
                                    </p>
                                    <div className="hero--btns">
                                        <button className="btn large--btn hero--left--btn">Newsy Platform</button>
                                        <button className="btn large--btn hero--right--btn">Launch a Survey</button>
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
