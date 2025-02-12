import React from "react";
import "../styles/ProductPrice.css";

const ProductPrice = ({ product }) => {
  const { price, offPrice } = product;
  const percentage = ((price - offPrice) / price) * 100;
  return (
    <div className="product--price">
      <span className="amount">
        <span className="current">{price}</span>
        <span className="percentage">{percentage} %</span>
      </span>
      <span className="previous">{offPrice}</span>
    </div>
  );
};

export default ProductPrice;
