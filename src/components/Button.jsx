import React from "react";
import "../styles/Button.css";
import Icon from "./Icon";

const Button = ({ name, iconName, onClick, hasIcon = false }) => {
  return (
    <button className="btn btn--primary" onClick={onClick}>
      <span className={`${hasIcon ? "inline" : " "}`}>
        {hasIcon && <Icon name={iconName} />}
        {name}
      </span>
    </button>
  );
};

export default Button;
