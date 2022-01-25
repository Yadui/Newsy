import React from 'react';

// Importing files will store file's address in var
import insta_logo from '../../images/instagram.png'
import fb_logo from '../../images/facebook.png'
import twitter_logo from '../../images/twitter.png'
import linkedin_logo from '../../images/linkedin.png'

const Footer = () => {
    return(
        <div>
            <footer className="footer container-center">
                    <div className="footer-container">
                        <h3 className="logo">Logo</h3>
                    <div className="footer-info">
                        <div className="footer-developer">
                            <h4>Developed by</h4>
                            <p>Dev kumar</p>
                            <p>Abhinav</p>
                            <p>Dr Sushil</p>
                            <p>Abhinav</p>
                        </div>
                        <div className="footer-share">
                            <div className="footer-share-quote">
                                <h4>Share, Get Good karma , Get more karma, Repeat.</h4>
                            </div>
                            <p>Reminder : change icons here , Use svg not png</p>
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
                            <p>At the heart of our company is a global online community, where millions of people and thousands of political, cultural and commercial organisations engage in a continuous conversation about their beliefs, behaviours and brands.</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2021 Newsy PLC. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )       
}

export default Footer;
