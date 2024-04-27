import React, { useState, useEffect } from "react";
import "./Popular.css";
import Item from "../item/Item";
const Popular = () => {
  const [popular_Product, setPopular_Product] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/poularWomen")
      .then((res) => res.json())
      .then((data) => {
        setPopular_Product(data);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {popular_Product.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
