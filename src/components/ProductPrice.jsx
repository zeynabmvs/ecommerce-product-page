import React from "react";
import "../styles/ProductPrice.css";

const ProductPrice = ({ current, percentage, previous }) => {
  return (
    <div className="product--price">
      <span className="amount">
        <span className="current">{current}</span>
        <span className="percentage">{percentage}</span>
      </span>
      <span className="previous">{previous}</span>
    </div>
  );
};

export default ProductPrice;
