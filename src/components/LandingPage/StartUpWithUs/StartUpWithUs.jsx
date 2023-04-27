import React from "react";
import Carousel from "./Carousel/Carousel";
import "./StartUpWithUs.css";

const StartUpWithUs = () => {
  return (
    <>
      <div className="m-ss">
        <div className="section-header">
          <h2>StartUp's</h2>
        </div>
        <div className="m-ss-c">
          <div className="m-ss-c-l">
            <h3 className="m-ss-cl-h5">
              These are the startups listed with us intending to optimize growth
              . Access the best as per your interest .
            </h3>
            <button>Explore Now</button>
          </div>
          <div className="m-ss-c-r">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUpWithUs;
