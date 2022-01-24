//! Can only make 50 news api req per day so change it from time to time in both ALAN and here
//! So nothing will render if limit exceeds


import React, { useState } from "react";


import $ from 'jquery'

const StaticNewsCards = () => {
    const [articles, setArticles] = useState([]);

    const API_KEY = "c4b46fbfe276407bba595c50214a4ebc";
    let NEWS_API_URL =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + API_KEY;

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
            <h3>All section card</h3>
                {articles.map((article) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{new Date(article.publishedAt).toDateString()}</div>
                                    <div class="card-source">{article.source.name}</div>
                                </div>
                                <div class="card-title">
                                    <h4>{article.title}</h4>
                                </div>
                                <div class="card-text">
                                    <p>{article.description}</p>
                                </div>
                                <a href={article.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                            </div>
                        </div>
                    );
                })}
            </div>





            <div id="India" data-tab-content class="">
            <h3>India card</h3>
                {articles.map((article) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{new Date(article.publishedAt).toDateString()}</div>
                                    <div class="card-source">{article.source.name}</div>
                                </div>
                                <div class="card-title">
                                    <h4>{article.title}</h4>
                                </div>
                                <div class="card-text">
                                    <p>{article.description}</p>
                                </div>
                                <a href={article.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                            </div>
                        </div>
                    );
                })}
            </div>


            
            <div id="USA" data-tab-content class="">
            <h3>USA card</h3>
                {articles.map((article) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{new Date(article.publishedAt).toDateString()}</div>
                                    <div class="card-source">{article.source.name}</div>
                                </div>
                                <div class="card-title">
                                    <h4>{article.title}</h4>
                                </div>
                                <div class="card-text">
                                    <p>{article.description}</p>
                                </div>
                                <a href={article.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                            </div>
                        </div>
                    );
                })}
            </div>

            

            <div id="UK" data-tab-content class="">
            <h3>UK card</h3>
                {articles.map((article) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{new Date(article.publishedAt).toDateString()}</div>
                                    <div class="card-source">{article.source.name}</div>
                                </div>
                                <div class="card-title">
                                    <h4>{article.title}</h4>
                                </div>
                                <div class="card-text">
                                    <p>{article.description}</p>
                                </div>
                                <a href={article.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                            </div>
                        </div>
                    );
                })}
            </div>

            

            <div id="Canada" data-tab-content class="">
            <h3>Canada card</h3>
                {articles.map((article) => {
                    return (
                        <div class="card">
                            <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{new Date(article.publishedAt).toDateString()}</div>
                                    <div class="card-source">{article.source.name}</div>
                                </div>
                                <div class="card-title">
                                    <h4>{article.title}</h4>
                                </div>
                                <div class="card-text">
                                    <p>{article.description}</p>
                                </div>
                                <a href={article.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default StaticNewsCards;