import React from "react";
import "../styles/ProductImage.css";

const ProductImagesList = ({ images, onSetImage, imageCount }) => {
  return (
    <div className="product-list">
      {images.map((image) => (
        <span
          className={`image-card ${image === imageCount ? "active" : ""}`}
          onClick={() => onSetImage(image)}
          key={image}
        >
          <img
            src={process.env.PUBLIC_URL + `/images/image-product-${image}.jpg`}
            alt="Product"
          />
        </span>
      ))}
    </div>
  );
};

export default ProductImagesList;
