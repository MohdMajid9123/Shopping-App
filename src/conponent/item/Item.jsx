import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  const { id, image, name, new_price, old_price } = item;
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>

      <p>{name}</p>
      <div className="item_prices">
        <div className="item_price_new">{new_price}</div>
        <div className="item_price_old">{old_price}</div>
      </div>
    </div>
  );
};

export default Item;
