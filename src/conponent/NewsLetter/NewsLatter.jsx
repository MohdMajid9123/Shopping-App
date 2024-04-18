import React from "react";
import "./NewsLatter.css";
const NewsLatter = () => {
  return (
    <div className="NewsLatter">
      <h1>Get Exclusive Offfers On YOur Email</h1>
      <p>Subscribe to Our NewsLetter and stay Update</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>
          Subscribe <span>Now</span>
        </button>
      </div>
    </div>
  );
};

export default NewsLatter;
