import React from "react";

const News = (props) => {

    return (

        <React.Fragment>

            {/* News card */}
            <div className="news">

                {/* News image */}
                <div className="news-img">

                    <img src={props.article.urlToImage} alt="Source not found" />

                </div>

                {/* News title */}
                <h5>{props.article.title}</h5>

                {/* News description */}
                <p className="text-justify">

                    {props.article.description?.substring(0, 150)}... &nbsp;

                    {/* Read more link */}
                    <a href={props.article.url} target="_blank" rel="noopener noreferrer">Read More</a>

                </p>

                {/* News source and author */}
                <div className="source">

                    <p>Author: {props.article.author}</p>

                    <p>{props.article.source.name}</p>

                </div>

            </div>

        </React.Fragment>
    );
};

export default News;
