import React from "react";
//import css
import "./Hero.css";
// import image
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h1>NEW ARRIVALS ONLY</h1>
        <div>
          <div className="hand_Icon">
            <h1>New</h1>
            <img src={hand_icon} alt={hand_icon} />
          </div>
          <h2>Collection</h2>
          <h2>For EveryOne</h2>
        </div>
        <div className="hero_latest_btn">
          <div>Latest Collection</div>
          <img src={arrow} alt={arrow} />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero} alt={hero} />
      </div>
    </div>
  );
};

export default Hero;
