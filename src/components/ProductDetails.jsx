import React from "react";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
  const { title, heading, content } = product;
  return (
    <div className="card">
      <p className="title">{title}</p>
      <h2 className="heading">{heading}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

export default ProductDetails;
