import React from 'react';

import StaticCard from './StaticCard';

const StaticNewsCards = () => {


let articles = []


    
const API_KEY = '6c0701cd55ef4880a5e369dc9a95311f';
let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+API_KEY;



fetch(NEWS_API_URL)
        .then(res => res.json()
        )
        .then(data => {
            
            for(var i = 0; i<1; i++){
                // console.log(data.articles[i]);
                articles[i] = data.articles[i];
            }
        })
        .catch(error => console.log('Error'))



console.log("Printing fetched objects now")
console.log(articles.source)

// articles.map((article) => {
//     console.log(article.content)
// })






    return (
        <div>
            <div id="all-cards" class="all-cards">
                {articles.map((article) => {
                    {/* console.log(element) */}
                    return(
                        <div class="card">
                            <div class="card-image">
                                {/* Need to set width here only for online pics and 100% wrt parent container */}
                                <img src={article.urlToImage} width="100%" alt="News image" />
                            </div>
                            <div class="card-body">
                                <div class="card-info">
                                    <div class="card-date">{(new Date(article.publishedAt)).toDateString()}</div>
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
                    )
                })}
            </div>
        </div>
    );
};

export default StaticNewsCards;
