import React, { createContext, useState } from "react";

import all_product from "../conponent/Assets/all_product";

export const ShopContact = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopcontactProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const RemoveToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // ye item ke amount ko increase or decrease show karne ke liye hai

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // ye cart ke value ko increase or decrease show karne ke liye hai
  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    RemoveToCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContact.Provider value={contextValue}>
      {props.children}
    </ShopContact.Provider>
  );
};

export default ShopcontactProvider;
