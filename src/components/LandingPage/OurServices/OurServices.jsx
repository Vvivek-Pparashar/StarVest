import React from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";

const OurServices = () => {
  return (
    <>
      <div className="m-os">
        <div className="section-header">
          <h2 style={{ color: "white" }}>Our services</h2>
        </div>
        <div className="m-os-c">
          <div className="m-card">
            <Link
              to={"/"}
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/Reviews.jpg")`,
                backgroundPosition: "60% 0%",
              }}
            >
              <h5 className="m-card-h5">Reviews</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
            </Link>
          </div>
          <div className="m-card">
            <Link
              to={"/"}
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/RoadMap.jpg")`,
              }}
            >
              <h5 className="m-card-h5">RoadMap</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
            </Link>
          </div>
          <div className="m-card">
            <Link
              to={"/Blogs"}
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/Blog.jpg")`,
              }}
            >
              <h5 className="m-card-h5">Blog</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
