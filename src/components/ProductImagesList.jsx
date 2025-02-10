import React from "react";
import "../styles/ProductImage.css";

const ProductImagesList = ({ images }) => {
  console.log("image ", images);
  // return (
  //   <div>
  //     <img
  //       src={process.env.PUBLIC_URL + `/images/image-product-1.jpg`}
  //       alt="Product"
  //     />
  //   </div>
  // );
  return (
    <div className="product-list">
      {images.map((image) => (
        <span className="image-card">
          {" "}
          <img
            key={image}
            src={process.env.PUBLIC_URL + `/images/image-product-${image}.jpg`}
            alt="Product"
          />
        </span>
      ))}
    </div>
  );
};

export default ProductImagesList;
