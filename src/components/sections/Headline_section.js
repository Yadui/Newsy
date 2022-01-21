import React from 'react';

const Headline_section = () => {
    return(
        <div>
            <div class="headline-section">
                <div class="container-center">
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
                                <div id="all-cards" class="all-cards">
                                    <div class="card">All Category Card1</div>
                                    <div class="card">All Category Card2</div>
                                    <div class="card">All Category Card3</div>
                                    
                                </div>
                                <div id="india-cards" class="india-cards">
                                    <div class="card">INDIA Category Card1</div>
                                    <div class="card">INDIA Category Card2</div>
                                    <div class="card">INDIA Category Card3</div>
                                    <div class="card">INDIA Category Card4</div>
                                    <div class="card">INDIA Category Card5</div>
                                    <div class="card">INDIA Category Card6</div>
                                </div>
                                <div id="usa-cards" class="usa-cards">
                                    <div class="card">USA Category Card1</div>
                                    <div class="card">USA Category Card2</div>
                                    <div class="card">USA Category Card3</div>
                                    <div class="card">USA Category Card4</div>
                                    <div class="card">USA Category Card5</div>
                                    <div class="card">USA Category Card6</div>
                                </div>
                                <div id="uk-cards" class="uk-cards">
                                    <div class="card">UK Category Card1</div>
                                    <div class="card">UK Category Card2</div>
                                    <div class="card">UK Category Card3</div>
                                    <div class="card">UK Category Card4</div>
                                    <div class="card">UK Category Card5</div>
                                    <div class="card">UK Category Card6</div>
                                </div>
                                <div id="canada-cards" class="canada-cards">
                                    <div class="card">Canada Category Card1</div>
                                    <div class="card">Canada Category Card2</div>
                                    <div class="card">Canada Category Card3</div>
                                    <div class="card">Canada Category Card4</div>
                                    <div class="card">Canada Category Card5</div>
                                    <div class="card">Canada Category Card6</div>
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
