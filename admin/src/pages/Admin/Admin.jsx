import React from "react";
import "./Admin.css";
import SideBar from "../../component/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../component/AddProduct/AddProduct";
import ListProduct from "../../component/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <SideBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
