import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <div id="about-container">
      <div id="left-item">
        <img
          id="about-img"
          src="https://mindvolt-project.s3.us-east-2.amazonaws.com/pexels-mart-production-7641408.jpg"
          alt=""
        />
      </div>
      <div id="middle-item">
            <h5>When it's time to make an online purchase, use your FirstBank Visa® Debit Card.</h5>
      </div>
      <div id="right-item">
        <img
          id="about-img"
          src="https://mindvolt-project.s3.us-east-2.amazonaws.com/pexels-lina-kivaka-3395282.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSection;
