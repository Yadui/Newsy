import React from 'react';

import category_logo from '../../images/category.png';
import term_logo from '../../images/business.png';
import source_logo from '../../images/news.png'

const Information = () => {
    return(
        <div>
            <div class="instructions-section">
                <div class="container-center">
                    <div class="instructions">
                        <h2>Discover how YouGov can help you</h2>
                        <div class="inst-cards">
                            <div class="inst--card">
                                <div class="inst-logo">
                                    <img src={category_logo} alt="Category" />
                                </div>
                                <h4 class="inst--head">News By Categories</h4>
                                <p class="inst--content">Business, Entertainement, General, Health, Souce, Sports, Technology</p>
                            </div>
                            <div class="inst--card">
                                <div class="inst-logo">
                                    <img src={term_logo} alt="" />
                                </div>
                                <h4 class="inst--head">News By Terms</h4>
                                <p class="inst--content">Bitcoin, Playstation 5, Smartphones, Donald Trump</p>
                                
                            </div>
                            <div class="inst--card">
                                <div class="inst-logo">
                                    <img src={source_logo} alt="" />
                                </div>
                                <h4 class="inst--head">News by Sources</h4>
                                <p class="inst--content">CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News</p>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;
