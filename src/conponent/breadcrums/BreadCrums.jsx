import React from "react";
import "./BreadCrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <HOME-screen></HOME-screen> <img src={arrow_icon} alt={arrow_icon} /> SHOP{" "}
      <img src={arrow_icon} alt={arrow_icon} /> {product.category}{" "}
      <img src={arrow_icon} alt={arrow_icon} /> {product.name}
    </div>
  );
};

export default BreadCrums;
