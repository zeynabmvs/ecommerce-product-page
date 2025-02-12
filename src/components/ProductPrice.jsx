import React from "react";
import "../styles/ProductPrice.css";
import { formatPrice } from "../utils/helper.js";

const ProductPrice = ({ product }) => {
  const { price, offPrice } = product;
  const percentage = ((price - offPrice) / price) * 100;
  return (
    <div className="product--price">
      <span className="amount">
        <span className="current">${formatPrice(price, 2)}</span>
        <span className="percentage">{percentage} %</span>
      </span>
      <span className="previous">${formatPrice(offPrice, 2)}</span>
    </div>
  );
};

export default ProductPrice;
