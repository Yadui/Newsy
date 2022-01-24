import React from 'react';

import StaticNewsCards from './StaticNewsCards';

import $ from 'jquery'

const Headline_section = () => {

//! ----------------------------------------------------------------------------------------------------------------------------------------
//* TAB-NAV-BAR JS 


var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();

$(".selector").css({
    "left": activeItem.position.left + "px", 
    "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
    e.preventDefault();
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
    });
});

//! ------------------------------------------------------------------------------------------------------------------------------------

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
                            <div claass="tabs--section">
                                <div class="wrapper">
                                    <nav class="tabs">
                                        <div class="selector"></div>
                                        <a href="#" data-tab-target="#All"  class="active"><i class="fab fa-superpowers"></i>All</a>
                                        <a href="#" data-tab-target="#India"><i class="fas fa-hand-rock"></i>India</a>
                                        <a href="#" data-tab-target="#USA"><i class="fas fa-bolt"></i>USA</a>
                                        <a href="#" data-tab-target="#UK"><i class="fas fa-burn"></i>UK</a>
                                        <a href="#" data-tab-target="#Canada"><i class="fas fa-burn"></i>Canada</a>
                                    </nav>
                                </div>
                            </div>
                            <div class="tab-content">
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
