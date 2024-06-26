import React, { useContext, useRef, useState } from "react";
//import css
import "./Navbar.css";
//import image
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import dropDown_Icon from "../Assets/drop_down.png";
import { Link } from "react-router-dom";
import { ShopContact } from "../../context/ShopContact";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContact);

  const menuRef = useRef();

  const dropDown = (e) => {
    menuRef.current.classList.toggle("nav_menu_visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
        <Link to="/" style={{ color: "black" }}>
          <h1>SHOPPER</h1>
        </Link>
      </div>

      <img
        className="nav_dropDown"
        onClick={dropDown}
        src={dropDown_Icon}
        alt={dropDown_Icon}
      />
      <ul className="nav_menu" ref={menuRef}>
        <Link
          onClick={() => setMenu("shop")}
          className={menu === "shop" ? "active" : ""}
          to="/"
        >
          Shop
        </Link>

        <Link
          onClick={() => setMenu("mens")}
          className={menu === "mens" ? "active" : ""}
          to="/mens"
        >
          Mens
        </Link>

        <Link
          onClick={() => setMenu("woman")}
          className={menu === "woman" ? "active" : ""}
          to="/woman"
        >
          Woman
        </Link>

        <Link
          onClick={() => setMenu("kids")}
          className={menu === "kids" ? "active" : ""}
          to="/kids"
        >
          Kids
        </Link>
      </ul>
      <div className="nav_login_cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart} alt={cart} />
        </Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
