import React from "react";
import Card from './Card'


const CountryTab = (props) => {

    return (
        <div>
            <div id={props.countryId} data-tab-content className="">
                {props.articles.map((article) => {
                    return (
                        <div>
                            <Card
                                urlToImage={article.urlToImage}
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
        </div>
    );
};

export default CountryTab;