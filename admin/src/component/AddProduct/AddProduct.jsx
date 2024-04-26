import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_product = async (e) => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();

    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };
  return (
    <div className="addProduct">
      <div className="addProduct_itemField">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          placeholder="Type Here"
          name="name"
        />
      </div>
      <div className="addProduct_pric">
        <div className="addProduct_itemField">
          <p>Old Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="old price"
          />
        </div>
        <div className="addProduct_itemField">
          <p>New Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="new price"
          />
        </div>
      </div>
      <div className="addProduct_itemField">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add_prdoct_select"
        >
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addProduct_itemField">
        <label htmlFor="file_input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload_area"
            className="addProduct_thumnail_img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file_input"
          hidden
        />
      </div>
      <button onClick={() => Add_product()} className="addProduct_btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
