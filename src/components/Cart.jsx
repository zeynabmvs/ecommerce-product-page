import { useState } from "react";
import "../styles/Cart.css";
import Icon from "./Icon";
import Button from "./Button";

const Cart = ({
  items = [
    {
      product: {
        id: "123450",
        title: "Sneaker company",
        heading: "Fall limited edition sneakers",
        content:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
        price: 250.0,
        offPrice: 125.0,
      },
      count: 1,
    },
    {
      product: {
        id: "123430",
        title: "Sneaker company",
        heading: "Fall limited edition sneakers",
        content:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
        price: 300.0,
        offPrice: 150.0,
      },
      count: 2,
    },
  ],
  setShowCart,
  removeFromCart,
}) => {
  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Cart</h2>
        <button
          className="cart__close"
          aria-label="Close cart"
          onClick={closeCart}
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="cart__body">
        {items.length > 0 ? (
          <>
            <ul className="cart__items">
              {items?.map((item, index) => {
                const showPrice = (
                  item.product?.offPrice
                    ? item.product.offPrice
                    : item.product.price
                ).toFixed(2);
                const totalPrice = (showPrice * item.count).toFixed(2);
                return (
                  <li key={item.product.id} className="cart__item">
                    <img
                      src="./images/image-product-1-thumbnail.jpg"
                      alt=""
                      className="cart__item-img"
                    />
                    <div>
                      <h3 className="cart__item-title">
                        {item.product.heading}
                      </h3>
                      <span className="cart__item-pice">
                        ${showPrice} x {item.count} <b>${totalPrice}</b>
                      </span>
                    </div>
                    <button
                      className="cart__item-remove"
                      onClick={() => removeFromCart(index)}
                    >
                      <Icon name="delete" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <Button
              name="Checkout"
              onClick={console.log("click")}
              hasIcon={false}
            />
          </>
        ) : (
          <p className="cart__empty-message">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
