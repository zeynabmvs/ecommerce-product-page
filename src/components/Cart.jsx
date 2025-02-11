import { useContext, useState } from "react";
import "../styles/Cart.css";
import Icon from "./Icon";
import Button from "./Button";
import {CartContext} from "../App";

const Cart = ({ setShowCart }) => {
  const { cart, dispatch } = useContext(CartContext);

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
        {cart.length > 0 ? (
          <>
            <ul className="cart__items">
              {cart?.map((item, index) => {
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
                      onClick={() =>
                        dispatch({ type: "removeFromCart", index: index })
                      }
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
