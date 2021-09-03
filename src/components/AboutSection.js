import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <div id="about-container">
      <div id="left-item">
        <img
          id="about-img"
          src={require("../images/pexels-mart-production-7641408.jpg").default}
          alt=""
        />
      </div>
      <div id="middle-item">
            <h5>When it's time to make an online purchase, use your FirstBank Visa® Debit Card.</h5>
      </div>
      <div id="right-item">
        <img
          id="about-img"
          src={require("../images/pexels-lina-kivaka-3395282.jpg").default}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSection;
