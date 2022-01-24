import React from 'react';

const Card = (props) => {
    console.log(props.article)
    return(
        <div>
            <h4>{props.tab}</h4>
            <div class="card">
                <div class="card-image">
                {/* Need to set width here only for online pics and 100% wrt parent container */}
                <img src={props.urlToImage} width="100%" alt="News image" />
                </div>
                <div class="card-body">
                    <div class="card-info">
                        <div class="card-date">{new Date(props.publishedAt).toDateString()}</div>
                        <div class="card-source">{props.srcName}</div>
                    </div>
                    <div class="card-title">
                        <h4>{props.title}</h4>
                    </div>
                    <div class="card-text">
                        <p>{props.description}</p>
                    </div>
                    <a href={props.url} target="_blank" class="btn card-btn">LEARN MORE</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
