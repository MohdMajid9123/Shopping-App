import React, { useEffect, useState } from "react";
import "./ListProduct.css";

import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="listProduct">
      <h1>All Prdoduct List</h1>
      <div className="listproduct_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct_all_product">
        <hr />
        {allProduct.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct_format_main listproduct_format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct_product_icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  alt=""
                  className="listproduct_remove_icon"
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
