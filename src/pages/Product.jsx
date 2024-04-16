import React, { useContext } from "react";
import { ShopContact } from "../context/ShopContact";
import { useParams } from "react-router-dom";
import BreadCrums from "../conponent/breadcrums/BreadCrums";
import ProductDisplay from "../conponent/productDisplay/ProductDisplay";
import DiscriptionBox from "../conponent/discriptionBox/DiscriptionBox";

const Product = () => {
  const { all_product } = useContext(ShopContact);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
    </div>
  );
};

export default Product;
