import React from 'react';

const StaticCard = (article) => {
    return (
        <div>
            <div class="card">
                        <div class="card-image">
                            {/* Need to set width here only for online pics and 100% wrt parent container */}
                            <img src={article.urlToImage} width="100%" alt="News image" />
                        </div>
                        <div class="card-body">
                            <div class="card-info">
                                <div class="card-date">{(new Date(article.publishedAt)).toDateString()}</div>
                                <div class="card-source">Source name</div>
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
        </div>
        );
};

export default StaticCard;
