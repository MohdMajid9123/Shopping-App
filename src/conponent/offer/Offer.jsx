import React from "react";
import "./Offer.css";
import exclusive from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer mb">
      <div className="offer_left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer_right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offer;
