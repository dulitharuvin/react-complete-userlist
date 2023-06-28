import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const { users } = props;
  const userListItems = users.map((user) => (
    <li key={user.id}>
      <span>{user.name}</span>
      <span>{user.age}</span>
    </li>
  ));

  return (
    <Card className={classes.users}>
      <ul>{userListItems}</ul>
    </Card>
  );
};

export default UsersList;
