import React, { useState } from "react";
import ListItem from "./list_item";
import "./style.css";
import pabauLogo from "./assets/logo-final.svg";
import items from "./items";
import SecondPage from "./second_page";

const LandingPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setPageNumber(2);
  };

  if (selectedItem) {
    return (
      <SecondPage
        item={selectedItem}
        pageNumber={pageNumber}
        onBack={() => {
          setSelectedItem(null);
          setPageNumber(1);
        }}
      />
    );
  }
  return (
    <div className="landing-page">
      <header className="header">
        <h4>Choose Service</h4>
        <p>Step {pageNumber}/2</p>
      </header>
      <body className="body">
        <div className="list-container">
          <div className="list">
            {items.map((item) => (
              <div
                key={item.title}
                onClick={() => handleItemClick(item)}
                className="list-item-container"
              >
                <ListItem imageSrc={item.imageSrc} title={item.title} />
              </div>
            ))}
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
      <footer>
        <div className="footer">
          <p>Powered By </p>
          <img src={pabauLogo} alt="footer-logo" className="footer-logo" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
