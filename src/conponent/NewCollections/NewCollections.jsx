import React from "react";
import "./NewCollection.css";
import NewCollection from "../Assets/new_collections";
import Item from "../item/Item";
const NewCollections = () => {
  return (
    <div className="NewCollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {NewCollection.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
