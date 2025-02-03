import React from "react";
import "../styles/ProductDetails.css";

const ProductDetails = ({ title, heading, content }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <h2 className="heading">{heading}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

export default ProductDetails;
