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
  };
  const RemoveToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { all_product, cartItems, addToCart, RemoveToCart };

  return (
    <ShopContact.Provider value={contextValue}>
      {props.children}
    </ShopContact.Provider>
  );
};

export default ShopcontactProvider;
