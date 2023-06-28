import React from "react";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <form>
      <div className={classes.input}>
        <label htmlFor="name">Name</label>
        <input id="name" />
      </div>
      <div className={classes.input}>
        <label htmlFor="age">Age</label>
        <input id="age" />
      </div>
    </form>
  );
};

export default AddUser;
