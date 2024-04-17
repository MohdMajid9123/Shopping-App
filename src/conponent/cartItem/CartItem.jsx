import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContact } from "../../context/ShopContact";

import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, cartItems, RemoveToCart, getTotalCartAmount } =
    useContext(ShopContact);
  return (
    <div className="cartItems">
      <div className="cartItems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={index}>
              <div className="cartItem_format cartItems_format_main">
                <img src={item.image} className="cartItem_icon" alt="" />
                <p className="product_name">{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cartItemQuentity">
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  className="cart_remove_image"
                  src={remove_icon}
                  onClick={() => {
                    RemoveToCart(item.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems_down">
        <div className="cartItems_totals">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems_total_items">
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems_total_items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems_total_items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems_promocode">
          <p>if you have a promo code , Enter it Here</p>
          <div className="cartItems_promobox">
            <input type="text" placeholder="promo code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
