import React from "react";
import pabauLogo from "./assets/logo-final.svg";
import "./style.css";
import leftArrow from "./assets/left-arrow.png";

const SecondPage = ({ item, pageNumber }) => {
  return (
    <div className="landing-page">
      <header className="header">
        <h4>Choose Service</h4>
        <p>Step {pageNumber}/2</p>
      </header>
      <body className="body">
        <div className="list-container">
          <div className="list">
            <div className="title-and-back">
              <a href="/LandingPage">
                <img
                  src={leftArrow}
                  alt="the-next-arrow"
                  className="left-arrow"
                />
              </a>
              <div className="title-container">
                <h4 className="description-title">{item.title}</h4>
              </div>
            </div>
            <p className="description-text">{item.description}</p>
          </div>
          <div className="contact-info">
            <p>
              Not sure about consultation type? Please, call{" "}
              <a href="tel:02037959063" className="phone-number">
                0203 7959063
              </a>
            </p>
          </div>
        </div>
      </body>
      <footer className="footer">
        <p>Powered By </p>
        <img src={pabauLogo} alt="footer-logo" className="footer-logo" />
      </footer>
    </div>
  );
};
export default SecondPage;
