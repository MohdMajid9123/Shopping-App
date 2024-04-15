import React from "react";
import Navbar from "./conponent/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSingup from "./pages/LoginSingup";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./conponent/footer/Footer";

import men_banner from "./conponent/Assets/banner_mens.png";
import women_banner from "./conponent/Assets/banner_women.png";
import kid_banner from "./conponent/Assets/banner_kids.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/woman"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSingup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
