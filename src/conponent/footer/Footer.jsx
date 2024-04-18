import React from "react";
import "./Footer.css";

import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pintrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt={footer_logo} />
        <h1>SHOPPER</h1>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
          <img src={instagram} alt={instagram} />
        </div>
        <div className="footer_icons_container">
          <img src={pintrest} alt={pintrest} />
        </div>
        <div className="footer_icons_container">
          <img src={whatsapp} alt={whatsapp} />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserve by Md Majid</p>
      </div>
    </div>
  );
};

export default Footer;
