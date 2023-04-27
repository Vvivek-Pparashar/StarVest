import React from "react";
import News from "./News/News";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <>
      <div className="m-ln">
        <div className="section-header">
          <h2>Latest News</h2>
        </div>
        <div className="m-ln-c">
          <News />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
