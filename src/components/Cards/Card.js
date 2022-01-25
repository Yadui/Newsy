import React from 'react';

import "./Card.css"

const Card = (props) => {
    return(
        <div>
            <div className="card">
                <div className="card-image">
                {/* Need to set width here only for online pics and 100% wrt parent container */}
                <img 
                    src={props.urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} 
                    width="100%" 
                    height="250px"
                    alt="News image" 
                />
                </div>
                <div className="card-body">
                    <div className="card-info">
                        <div className="card-date">{(new Date(props.publishedAt)).toDateString()}</div>
                        <div className="card-source">{props.srcName}</div>
                    </div>
                    <div className="card-title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="card-text">
                        <p>{props.description}</p>
                    </div>
                    <a href={props.url} target="_blank" className="btn card-btn">LEARN MORE</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
