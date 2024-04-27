import React, { useEffect, useState } from "react";
import "./NewCollection.css";
// import NewCollection from "../Assets/new_collections";
import Item from "../item/Item";
const NewCollections = () => {
  const [new_collections, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newCollection")
      .then((res) => res.json())
      .then((data) => {
        setNew_Collection(data);
      });
  }, []);
  return (
    <div className="NewCollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
