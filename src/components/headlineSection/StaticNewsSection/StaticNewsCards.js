//! Can only make 50 news api req per day so change it from time to time in both ALAN and here
//! So nothing will render if limit exceeds

import React, { useState, useEffect } from "react";
import Card from "../../Cards/Card"

import CountryTab from "../../Cards/CountryTab";
import "./StaticNewsCards.css"

import SkeletonElement from "../../Cards/SkeletonElement";
// Dont use it extensively to avoid being exhausted and then tab-nav-bar will also not work
//News api - c957fa442ba64071b52a79befb5966b5
// Countries : in, us, ca, gb(for uk)
// countries code : https://newsapi.org/sources

const StaticNewsCards = () => {
    const [articles, setArticles] = useState([]);
    const [countryId, setCountryId] = useState("in");
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
    // Everytime we fetch data we set loading to true
    setLoading(true)

    const API_KEY = "c957fa442ba64071b52a79befb5966b5";
    let NEWS_API_URL =
        "https://newsapi.org/v2/top-headlines?country=" +
        countryId +
        "&apiKey=" +
        API_KEY;

    fetch(NEWS_API_URL)
        .then((res) => res.json())
        .then((data) => {
        const newArticles = [];
            // For getting entire array of news objects
            // data.articles.map((article) => newArticles.push(article));

            // For getting only 3 news object
            for (let i = 0; i < 6; i++) {
                newArticles.push(data.articles[i]);
            }
            setArticles(newArticles);
            // console.log(articles);
            setLoading(false)
        })
        .catch((error) => console.log("Error"));
    }, [countryId]);


    const setCountry = (country) => {
        setCountryId(country.toString());
    };


    return (
        <div>
            <div claass="tabs--section">
                <div className="wrapper">
                    <nav className="tabs">
                        <div className="selector"></div>

                            <a
                                href="#"
                                data-tab-target="#India"
                                className="active"
                                onClick={() => setCountry("in")}
                            >
                                India
                            </a>
                            <a
                                href="#"
                                data-tab-target="#Malaysia"
                                onClick={() => setCountry("my")}
                            >
                                
                                Malaysia
                            </a>
                            <a 
                                href="#" 
                                data-tab-target="#USA" 
                                onClick={() => setCountry("us")}
                            >
                                USA
                            </a>
                            <a 
                                href="#"
                                data-tab-target="#UK"
                                onClick={() => setCountry("gb")}
                            >
                                UK
                            </a>
                            <a
                                href="#"
                                data-tab-target="#Canada"
                                onClick={() => setCountry("ca")}
                            >
                                Canada
                            </a>
                    </nav>
                </div>
            </div>



            <div className="tab-content">

            {isLoading && (
                <div>
                    <div id="All" data-tab-content className="active-tab">
                        <SkeletonElement/>
                        <SkeletonElement/>
                        <SkeletonElement/>
                        <SkeletonElement/>
                        <SkeletonElement/>
                        <SkeletonElement/>
                    </div>
                </div> 
            )}
            {isLoading || (
                <div>
                    <div id="India" data-tab-content className="active-tab">
                        {articles.map((article) => {
                            return (
                                <div>
                                    <Card
                                        tab="India"
                                        urlToImage={article.urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
                                        publishedAt={article.publishedAt}
                                        srcName={article.source.name}
                                        title={article.title}
                                        description={article.description}
                                        url={article.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    
                    <CountryTab 
                        countryId = "Malaysia"
                        articles = {articles}
                    />

                    <CountryTab
                        countryId = "USA"
                        articles = {articles}
                    />
                    <CountryTab
                        countryId = "UK"
                        articles = {articles}
                    />
                    <CountryTab
                        countryId = "Canada"
                        articles = {articles}
                    />

                </div>
            )}
            </div>

        </div>
    );
};

export default StaticNewsCards;
