import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="mf">
        <div className="m-f">
          <div className="m-f-l">
            <img src="../../../../assests/landingPage/logo.png" alt="logo" />
            <p className="m-f-l-p">
              We believe in promoting innovative <br />
              startups, a multifaceted platform <br />
              allowing user to review the <br />
              startups and get insight about <br />
              creative discipline for a <br />
              variety of projects. Opinions <br />
              supported by facts and <br />
              observations will to build a market.
            </p>
          </div>
          <div className="m-f-r">
            <div className="m-f-r-f">
              <div className="m-f-r-f-f">
                <span>Startups Partners</span>
                <a href="/">
                  <p>Our Partners</p>
                </a>
              </div>
              <div className="m-f-r-f-s">
                <span>Company</span>
                <a href="/">
                  <p>AboutUs</p>
                </a>
                <a href="/">
                  <p>Services</p>
                </a>
                <a href="/">
                  <p>News</p>
                </a>
                <a href="/">
                  <p>Contact</p>
                </a>
              </div>
            </div>
            <div className="m-f-r-s">
              <div className="m-f-r-s-f">
                <span>Review's</span>
                <a href="/">
                  <p>Reviews</p>
                </a>
              </div>

              <div className="m-f-r-s-s">
                <span>My Account</span>
                <a href="/">
                  <p>Register</p>
                </a>
                <a href="/">
                  <p>Login</p>
                </a>
                <a href="/">
                  <p>DashBoard</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className="p">
          &#169; StarVest Private Limited. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
