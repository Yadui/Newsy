import React, { useState } from "react";


const StaticNewsCards = () => {
    const [articles, setArticles] = useState([]);

    const API_KEY = "c957fa442ba64071b52a79befb5966b5";
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


    return (
        <div>
            <div id="all-cards" class="all-cards">
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