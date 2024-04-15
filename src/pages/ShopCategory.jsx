import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContact } from "../context/ShopContact";
import dropdown_icon from "../conponent/Assets/dropdown_icon.png";
import all_product from "../conponent/Assets/all_product";
import Item from "../conponent/item/Item";

const ShopCategory = (props) => {
  const { contextValue } = useContext(ShopContact);

  return (
    <div className="shop_category">
      <img
        src={props.banner}
        className="shopcategory_banner"
        alt={props.banner}
      />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={dropdown_icon} alt={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Item key={index} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory_loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
