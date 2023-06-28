import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const { type, onClick, className } = props;

  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
