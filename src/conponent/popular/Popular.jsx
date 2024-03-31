import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../item/Item";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
