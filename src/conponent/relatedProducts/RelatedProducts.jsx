import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProduct_item">
        {data_product.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
