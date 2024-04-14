import React from "react";
import Hero from "../conponent/hero/Hero";
import Popular from "../conponent/popular/Popular";
import Offer from "../conponent/offer/Offer";
import NewCollections from "../conponent/NewCollections/NewCollections";
import NewsLatter from "../conponent/NewsLetter/NewsLatter";
const Shop = () => {
  return (
    <div className="shop">
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLatter />
    </div>
  );
};

export default Shop;
