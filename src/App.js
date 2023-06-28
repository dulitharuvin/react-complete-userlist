import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const userAdded = (user) => {
    console.log(JSON.stringify(user));
    setUsersList((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userAdded} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
