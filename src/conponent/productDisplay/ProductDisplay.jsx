import React from "react";
import "./ProductDisplay.css";

import star_dull from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="productDisplay_left">
        <div className="productDisplay_img_list">
          <img src={product.image} alt={product.image} />
          <img src={product.image} alt={product.image} />
          <img src={product.image} alt={product.image} />
          <img src={product.image} alt={product.image} />
        </div>
        <div className="productDisplay_img">
          <img
            className="productDisplay_main_img"
            src={product.image}
            alt={product.image}
          />
        </div>
      </div>
      <div className="productDisplay_right">
        <h1>{product.name}</h1>
        <div className="productDisplay_right_start">
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_icon} alt={star_icon} />
          <img src={star_dull} alt={star_dull} />
          <p>(122)</p>
        </div>
        <div className="productDisplay_right_prices">
          <div className="productDisplay_right_price_old">
            ${product.old_price}
          </div>
          <div className="productDisplay_right_price_new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay_right_description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus cumque aut deleniti dolorum, placeat nesciunt magni
            culpa quidem voluptatem aspernatur!
          </p>
        </div>
        <div className="productDisplay_right_size">
          <h1>Select size</h1>
          <div className="productDisplay_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productDisplay_right_category">
          <span>Cateogry :</span> Woman T-Shirt,Crop Top
        </p>
        <p className="productDisplay_right_category">
          <span>Tags :</span> Modern , Letast
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
