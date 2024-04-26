import React from "react";
import "./navbar.css";
import nav_logo from "../../assets/nav-logo.svg";
import profile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="navlogo" className="nav_logo" />
      <img src={profile} alt="profile" className="nav_logo" />
    </div>
  );
};

export default Navbar;
