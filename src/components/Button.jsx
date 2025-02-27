import React from "react";
import "../styles/Button.css";
import Icon from "./Icon";

const Button = ({ name, onClick, hasIcon = true }) => {
  return (
    <button className="btn btn--primary" onClick={onClick}>
      <span className={`${hasIcon ? "inline" : " "}`}>
        {hasIcon && <Icon name="cart" />}
        {name}
      </span>
    </button>
  );
};

export default Button;
