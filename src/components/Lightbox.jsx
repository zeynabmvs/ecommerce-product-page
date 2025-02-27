import React from "react";
import "../styles/Lightbox.css";
import Icon from "./Icon";

const Lightbox = ({ image, images, onClose, onPrev, onNext, onSetImage }) => {
  return (
    <div className="lightbox-overlay">
      <div className="lightbox-content">
            <button className="close-btn" onClick={onClose}>&times;</button>

            <button className="prev-btn" onClick={onPrev}>
                <Icon name="previous" alt="Previous icon" />
            </button>

            <img
            src={process.env.PUBLIC_URL + `/images/image-product-${image}.jpg`}
            alt="Product"
            className="lightbox-image"
            />

            <button className="next-btn" onClick={onNext}>
                <Icon name="next" alt="Next icon" />
            </button>

            <div className="thumbnail-container">
                {images.map((img) => (
                    <img
                    key={img}
                    src={process.env.PUBLIC_URL + `/images/image-product-${img}.jpg`}
                    alt={`Thumbnail ${img}`}
                    className={`thumbnail ${img === image ? "active" : ""}`}
                    onClick={() => onSetImage(img)}
                    />
                ))}
            </div>
      </div>
    </div>
  );
};

export default Lightbox;
