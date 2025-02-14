import React, { useState } from "react";
import Icon from "./Icon";
import "../styles/ProductImage.css";
import ProductImagesList from "./ProductImagesList.jsx";
import Lightbox from "./Lightbox.jsx";

const ProductImage = () => {
  const [count, setCount] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [1, 2, 3, 4];

  const minValue = 1;
  const maxValue = 4;

  const previousImage = () => {
    setCount(count > minValue ? count - 1 : maxValue);
  };

  const nextImage = () => {
    setCount(count < maxValue ? count + 1 : minValue);
  };

  const handleSetImage = (imageCount) => {
    setCount(imageCount);
  };

  return (
    <div>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + `/images/image-product-${count}.jpg`}
          alt="Product"
          onClick={() => setIsLightboxOpen(true)} // Open lightbox on click
        />
        <span className="cs-icon previous-icon" onClick={previousImage}>
          <Icon name="previous" alt="Previous icon" />
        </span>
        <span className="cs-icon next-icon" onClick={nextImage}>
          <Icon name="next" alt="Next icon" />
        </span>
      </div>
      <ProductImagesList
        images={images}
        onSetImage={handleSetImage}
        imageCount={count}
      />

      {/* Lightbox (only renders when open) */}
      {isLightboxOpen && (
        <Lightbox
          image={count}
          images={images}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={previousImage}
          onNext={nextImage}
          onSetImage={handleSetImage}
        />
      )}
    </div>
  );
};

export default ProductImage;
