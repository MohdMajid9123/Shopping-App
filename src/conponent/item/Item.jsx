import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  const { id, image, name, new_price, old_price } = item;

  const handler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={handler} src={image} alt="" />
      </Link>

      <Link to={`/product/${id}`} onClick={handler}>
        <p>{name}</p>
      </Link>
      <div className="item_prices">
        <div className="item_price_new">{new_price}</div>
        <div className="item_price_old">{old_price}</div>
      </div>
    </div>
  );
};

export default Item;
