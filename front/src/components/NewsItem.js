import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <h3>
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div className="news-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
