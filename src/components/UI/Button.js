import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const [onClick] = props;

  return (
    <button className={classes.button} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Button;
