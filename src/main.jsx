import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopcontactProvider from "./context/ShopContact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopcontactProvider>
      <App />
    </ShopcontactProvider>
  </BrowserRouter>
);
