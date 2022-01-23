import React from 'react';

import StaticNewsCards from './StaticNewsCards';

const Headline_section = () => {


    


    return(
        <div>
            <div class="headline-section">
                <div class="container-center">
                    <div>
                        <div class="headline-section-container">
                            <div class="headline-header headline-center">
                            <h2>Unrivalled intelligence on the Technology sector</h2>
                            <p>
                                Leveraging our proprietary panel of 15 million people worldwide, YouGov 
                                has over 10 years of data and insights on the Technology sector. Explore 
                                a range of curated highlights on the latest in digital trends below, or 
                                contact us to dig much, much deeper.
                            </p>
                        </div>
                        <div class="headline-container">
                            <menu class="headline-tab-menu">
                                <div class="tab-menu">
                                    <div data-tab-target="#all-cards" class="menu--item active--menu">All</div>
                                    <div data-tab-target="#india-cards" class="menu--item">India</div>
                                    <div data-tab-target="#usa-cards" class="menu--item">USA</div>
                                    <div data-tab-target="#uk-cards" class="menu--item">UK</div>
                                    <div data-tab-target="#canada-cards" class="menu--item">Canada</div>
                                </div>
                            </menu>
                            <div class="headline-cards">
                                <StaticNewsCards />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Headline_section;
