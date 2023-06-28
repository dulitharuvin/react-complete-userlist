import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return <button className={classes.card}>{props.children}</button>;
};

export default Card;
