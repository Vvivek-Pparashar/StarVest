import React from "react";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div className="m">
      <div className="diagonal"></div>
      <div className="m-l">
        <h1 className="m-l-h1">
          Discover what's <br />
          possible
        </h1>
        <p className="m-l-p">
          Join now to bring good startups <br />
          to life, Experience the magic of
          <br />
          innovative startups.
        </p>
        <button>Explore Now</button>
      </div>
      <div className="m-r">
        <img
          src="../../../../assests/landingPage/heroImage.png"
          alt="heropage"
        />
      </div>
    </div>
  );
};

export default HeroPage;
