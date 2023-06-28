import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const { className } = props;

  return <div className={`${classes.card} ${className}`}>{props.children}</div>;
};

export default Card;
