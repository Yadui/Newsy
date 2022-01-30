import React from 'react';

import StaticNewsCards from './StaticNewsSection/StaticNewsCards';

import $ from 'jquery'

import "./Headline_section.css"

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


$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active-tab').siblings().removeClass('active-tab');

        e.preventDefault();
    });
});

const tabs2 = document.querySelectorAll('[data-tab-target]')
const tabssContent = document.querySelectorAll('[data-tab-content]')


tabs2.forEach((tab) => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabssContent.forEach((tabContent) => {
            tabContent.classList.remove('active-tab')
        })
        if(target!= null){
            target.classList.add('active-tab')
        }
        else{
            // There is some error if user selects tabs too frequently then target is null so error is thrown
            // So using reload to tackle that 
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        }
    })
})
//! ------------------------------------------------------------------------------------------------------------------------------------

    return(
        <div>
            <div className="headline-section">
                <div className="container-center">
                    <div>
                        <div className="headline-section-container">
                            <div className="headline-header headline-center">
                            <h2>Top Headlines from Countries</h2>
                            <p>
                                Articles , news on different topics from around world all delivered at one place without typing with ALAN voice Assisstant.
                                NEWSY fetches news from  Newsapi , the most reliable source for news and provides you with variety of news
                            </p>
                        </div>
                        <div className="headline-container">
                            
                                <StaticNewsCards />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Headline_section;
