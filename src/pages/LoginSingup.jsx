import React, { useState } from "react";
import "./CSS/LoginSingup.css";

const LoginSingup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className="loginSignup">
      <div className="loginSingup_container">
        <h1>{state}</h1>
        <div className="loginSingup_fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changHandler}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={changHandler}
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginSingup_login">
            Already have an Accout ?
            <span onClick={() => setState("Login")}> Login Here </span>
          </p>
        ) : (
          <p className="loginSingup_login">
            Create an Accout ?
            <span onClick={() => setState("Sign Up")}> Create Here </span>
          </p>
        )}

        <div className="loginSingup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
