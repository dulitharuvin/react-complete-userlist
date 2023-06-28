import React from "react";

import classes from "./Card.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h2>Erro</h2>
      </div>
      <div className={classes.content}></div>
      <div className={classes.actions}>
        <button>Cancel</button>
        <button>Ok</button>
      </div>
    </div>
  );
};

export default ErrorModal;
