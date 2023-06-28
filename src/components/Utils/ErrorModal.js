import React from "react";

import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  const { title, message, onOkay } = props;

  const okHandler = () => {
    onOkay();
  };

  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={okHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
