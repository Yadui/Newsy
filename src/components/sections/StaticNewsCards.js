//! Can only make 50 news api req per day so change it from time to time in both ALAN and here
//! So nothing will render if limit exceeds


import React, { useState, useEffect } from "react";
import Card from './Card'

import $ from 'jquery'
import India from "./India";

// Dont use it extensively to avoid being exhausted and then tab-nav-bar will also not work
//News api - c4b46fbfe276407bba595c50214a4ebc
// Countries : in, us, ca, gb(for uk)
// countries code : https://newsapi.org/sources



const StaticNewsCards = () => {
    const [articles, setArticles] = useState([]);
    const [countryId, setCountryId] = useState("in");

    useEffect(() => {
        const API_KEY = "c4b46fbfe276407bba595c50214a4ebc";
        let NEWS_API_URL =
        "https://newsapi.org/v2/top-headlines?country="+ countryId +"&apiKey=" + API_KEY;

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
    },[countryId])


    
    // this is the function that will change state of country to be used in Fetch
    // I am not able to pass parameter country instead of "us"
    const setCountry = (country) => {
        setCountryId("us")
    }





    return (
    <div>

        <div claass="tabs--section">
            <div class="wrapper">
                <nav class="tabs">
                    <div class="selector"></div>
                    {/* Here when I click on All tab in twice then only it changes state of CountryId to "us" as written in setCountry function */}
                    {/* the problem is that it won't change by clicking on anyother tabs */}
                    {/* I want to change CountryId state by passing parameter eg "in" for India , "ca" for canada  */}
                    {/* But I dont know how to pass by parameter (here "in", "ca") */}
                    {/* I cant use setCountryId() here */}
                    <a href="#" data-tab-target="#All"  class="active"  onClick={setCountry}><i class="fab fa-superpowers"></i>All</a>
                    <a href="#" data-tab-target="#India"><i class="fas fa-hand-rock" onClick={setCountry}></i>India</a>
                    <a href="#" data-tab-target="#USA"><i class="fas fa-bolt" onClick={setCountry}></i>USA</a>
                    <a href="#" data-tab-target="#UK"><i class="fas fa-burn" onClick={setCountry}></i>UK</a>
                    <a href="#" data-tab-target="#Canada"><i class="fas fa-burn" onClick={setCountry}></i>Canada</a>
                </nav>
            </div>
        </div>

        <div class="tab-content">

            <div id="All" data-tab-content class="active-tab">
            {console.log("All tabs")}
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
            {console.log("India")}
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
            {console.log("USA")}
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
            {console.log("UK")}

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
            {console.log("Canada")}
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
    </div>
    );
};

export default StaticNewsCards;