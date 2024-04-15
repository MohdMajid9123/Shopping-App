import React, { createContext } from "react";

import all_product from "../conponent/Assets/all_product";

export const ShopContact = createContext(null);

const ShopcontactProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContact.Provider value={contextValue}>
      {props.children}
    </ShopContact.Provider>
  );
};

export default ShopcontactProvider;
