import React from "react";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => {
  const { companyName, title, description } = product;
  return (
    <div className="card">
      <p className="title">{companyName}</p>
      <h2 className="heading">{title}</h2>
      <p className="content">{description}</p>
    </div>
  );
};

export default ProductDetails;
