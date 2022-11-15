import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?language=fr&q=jeux-olympique-marseille&from=2022-10-15&sortBy=publishedAt&apiKey=1f2a9b08375f44f09e03a0dfcfbc0cef`
      );
      setArticles(response.data.articles);
    };

    getArticles();
  }, []);
  return (
    <div>
      <div className="container container-news">
        {articles.slice(0, 5).map((article, index) => {
          return (
            <NewsItem
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
