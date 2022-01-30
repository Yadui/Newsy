import React from 'react';

// Importing files will store file's address in var
import insta_logo from '../../images/instagram.png'
import fb_logo from '../../images/facebook.png'
import twitter_logo from '../../images/twitter.png'
import linkedin_logo from '../../images/linkedin.png'

import "./Footer.css"

const Footer = () => {
    return(
        <div>
            <footer className="footer container-center">
                    <div className="footer-container">
                        <h3 className="logo">NEWSY</h3>
                    <div className="footer-info">
                        <div className="footer-developer">
                            <h4>Developed by</h4>
                            <div className='team-footer'>
                                <h5>Team</h5>
                                <p>Dev kumar Gupta 20001003035</p>
                                <p>Abhinav 20001003002</p>
                            </div>
                            <div className='team-supervisor'>
                                <h5>Project Supervisor</h5>
                                <p>Dr Sushil Kumar</p>
                            </div>
                        </div>
                        <div className="footer-share">
                            <div className="footer-share-quote">
                                <h4>Share, Get Good karma , Get more karma, Repeat.</h4>
                            </div>
                            <div className="footer-logo-flex-container">
                                <div className="footer-logos">
                                    <div className="footer--logo">
                                        <a href="#"><img src={insta_logo} alt="Instagram Icon" /></a>
                                    </div>
                                    
                                    <div className="footer--logo">
                                        <a href="#"><img src={fb_logo} alt="Facebook Icon" /></a>
                                    </div>
                                    
                                    <div className="footer--logo">
                                        <a href="#"><img src={linkedin_logo} alt="LinkedIn Icon" /></a>
                                    </div>
                                    
                                    <div className="footer--logo">
                                        <a href="#"><img src={twitter_logo} alt="Twitter Icon" /></a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="footer-about">
                            <h4>About us</h4>
                            <p>We are students of JC BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY , currently studing in 3rd sem B.Tech Computer Engineering . This site is developed as a News Project for 3rd sem Minor Project.</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2022 NEWSY. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )       
}

export default Footer;
