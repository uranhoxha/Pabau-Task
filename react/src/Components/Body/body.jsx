import React, { useState } from "react";
import "../Body/body.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../Body/images/logo.png";
import image1 from "../Body/images/image1.png";
import image2 from "../Body/images/image2.png";
import image3 from "../Body/images/image3.png";
import image4 from "../Body/images/image4.png";
import image5 from "../Body/images/image5.png";

const bodyContent = [
  {
    title: "Anti Wrinkle Treatment",
    image: image1,
  },
  {
    title: "Derma Fillers",
    image: image2,
  },
  {
    title: "Secret RF",
    image: image3,
  },
  {
    title: "HArmonyCA",
    image: image4,
  },
  {
    title: "Profhilo",
    image: image5,
  },
];

function Body() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (title) => {
    setSelectedOption(selectedOption === title ? null : title);
  };

  const resetSelection = () => {
    setSelectedOption(null);
  };

  return (
    <div className="body-container">
      <div className="header-container">
        <h3>{selectedOption || "Choose Service"}</h3>
        <p>{selectedOption ? "Step 2/2" : "Step 1/2"}</p>
      </div>
      <div className="body-container_content">
        {bodyContent.map(({ title, image }) => (
          <div
            key={title}
            className={`body-option ${
              selectedOption !== title && selectedOption ? "hidden" : ""
            }`}
            onClick={() => handleOptionClick(title)}
          >
            <div className="option-content">
              <img src={image} alt={title} />
              <h3>{title}</h3>
            </div>
            <IoIosArrowForward className="arrow" />
          </div>
        ))}
      </div>
      <div className="body-info">
        <p>
          Not sure about consultation type? Please, call{" "}
          <span>0203 7959063</span>
        </p>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <h4>Powered By</h4>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {selectedOption && (
        <button className="reset-button" onClick={resetSelection}>
          <FaArrowLeft />
        </button>
      )}
    </div>
  );
}

export default Body;
