import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

import add_product from "../../assets/Product_Cart.svg";
import product_icon from "../../assets/Product_list_icon.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar_item">
          <img src={add_product} alt="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar_item">
          <img src={product_icon} alt="" />
          <p> Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
