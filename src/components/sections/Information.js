import React from 'react';

import category_logo from '../../images/category.png';
import term_logo from '../../images/business.png';
import source_logo from '../../images/news.png'

const Information = () => {
    return(
        <div>
            <div className="instructions-section">
                <div className="container-center">
                    <div className="instructions">
                        <h2>Discover how Newsy can help you</h2>
                        <div className="inst-cards">
                            <div className="inst--card">
                                <div className="inst-logo">
                                    <img src={category_logo} alt="" />
                                </div>
                                <h4 className="inst--head">News By Categories</h4>
                                <p className="inst--content">Business, Entertainement, General, Health, Souce, Sports, Technology</p>
                            </div>
                            <div className="inst--card">
                                <div className="inst-logo">
                                    <img src={term_logo} alt="" />
                                </div>
                                <h4 className="inst--head">News By Terms</h4>
                                <p className="inst--content">Bitcoin, Playstation 5, Smartphones, Donald Trump</p>
                                
                            </div>
                            <div className="inst--card">
                                <div className="inst-logo">
                                    <img src={source_logo} alt="" />
                                </div>
                                <h4 className="inst--head">News by Sources</h4>
                                <p className="inst--content">CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News</p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;
