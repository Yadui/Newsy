//! Can only make 50 news api req per day so change it from time to time in both ALAN and here
//! So nothing will render if limit exceeds


import React, { useState } from "react";
import Card from './Card'

import $ from 'jquery'
import India from "./India";

// Dont use it extensively to avoid being exhausted and then tab-nav-bar will also not work
//News api - c4b46fbfe276407bba595c50214a4ebc
// Countries : in, us, ca, gb(for uk)
// countries code : https://newsapi.org/sources



const StaticNewsCards = () => {
    const [articles, setArticles] = useState([]);

    const API_KEY = "";
    let NEWS_API_URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

    fetch(NEWS_API_URL)
    .then((res) => res.json())
    .then((data) => {
        const newArticles = [];
        // For getting entire array of news objects
        // data.articles.map((article) => newArticles.push(article));

        // For getting only 3 news object 
        for(let i=0; i<3; i++){
            newArticles.push(data.articles[i]);
        }
        setArticles(newArticles);
        // console.log(articles);
    })
    .catch((error) => console.log("Error"));



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
            target.classList.add('active-tab')
        })
    })







    return (
        <div>
            <div id="All" data-tab-content class="active-tab">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "All"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>

            <div id="All" data-tab-content class="active-tab">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "All"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>



            <div id="India" data-tab-content class="">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "India"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>


            
            <div id="USA" data-tab-content class="">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "USA"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>

            

            <div id="UK" data-tab-content class="">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "UK"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>

            

            <div id="Canada" data-tab-content class="">
                {articles.map((article) => {
                    return (
                        <div>
                            <Card 
                                tab = "Canada"
                                urlToImage = {article.urlToImage}
                                publisedAt = {article.publishedAt}
                                srcName = {article.source.name}
                                title = {article.title}
                                description = {article.description}
                                url = {article.url}
                            />
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default StaticNewsCards;