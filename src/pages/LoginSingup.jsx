import React from "react";
import "./CSS/LoginSingup.css";

const LoginSingup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSingup_container">
        <h1>Sing Up</h1>
        <div className="loginSingup_fields">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>Continue</button>
        <p className="loginSingup_login">
          Already have an Accout ? <span> Login Here </span>
        </p>
        <div className="loginSingup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
