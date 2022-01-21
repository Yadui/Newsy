import React from 'react';

import StaticCard from './StaticCard';

const StaticNewsCards = () => {

// const StaticNewsCards = ({ articles: { description, publishedAt, source, title, url, urlToImage }}) => {


    let articles= [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Kohli stands down as India Test captain",
            "description": "Virat Kohli steps down as captain of India men's Test team after a record 68 matches as skipper",
            "url": "https://www.bbc.co.uk/sport/cricket/59999080",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
            "publishedAt": "2022-01-15T13:40:51Z",
            "content": "Virat Kohli has stepped down as captain of India men's Test team. \r\nThe 33-year-old - who stood down as limited-overs captain earlier this year - has led the Test side since 2014. \r\nHe has captained … [+586 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Passengers from Italy escape quarantine in India",
            "description": "They were among 125 passengers who tested positive for Covid after arriving on a flight from Milan.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-59904527",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1F55/production/_122612080_gettyimages-1237542173-594x594.jpg",
            "publishedAt": "2022-01-07T05:23:15Z",
            "content": "Image caption, Ambulances took the 160 passengers to a local hospital\r\nAt least 13 passengers, who tested positive for Covid-19 upon their arrival in the Indian city of Amritsar, have escaped institu… [+1772 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "India blocks foreign funding for Mother Teresa charity",
            "description": "Hindu hardliners have long accused the Catholic charity of trying to convert people to Christianity.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-59803771",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6E8E/production/_122520382_gettyimages-1234884340.jpg",
            "publishedAt": "2021-12-27T22:05:23Z",
            "content": "Image source, Getty Images\r\nImage caption, The Missionaries of Charity run community kitchens, schools and hospices across India\r\nIndia's government has refused to renew the foreign-funding licence f… [+2329 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "India: At least 12 dead in New Year temple stampede",
            "description": "Pilgrims were visiting the shrine of Mata Vaishno Devi to mark the new year when the tragedy unfolded.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-59845278",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A519/production/_122556224_temple2.jpg",
            "publishedAt": "2022-01-01T06:42:00Z",
            "content": "Image source, Getty Images\r\nImage caption, The cause of the stampede is not yet known\r\nAt least 12 people were killed and several others injured after a stampede at a religious shrine in India.\r\nPilg… [+1146 chars]"
        }
    ]



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
