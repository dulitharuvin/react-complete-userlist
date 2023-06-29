import React from "react";
import ReactDom from "react-dom";

import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Backdrop = (props) => {
  const { onConfirm } = props;

  return <div className={classes.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = (props) => {
  const { title, message, onConfirm } = props;

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const { title, message, onConfirm } = props;

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
