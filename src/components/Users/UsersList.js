import React from "react";

import classes from "./AddUser.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        <li>
          <p>Name : </p>
          <p>Age : </p>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
