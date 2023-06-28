import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const userAdded = (user) => {
    console.log(JSON.stringify(user));
  };
  
  return (
    <div>
      <AddUser onAddUser={userAdded} />
    </div>
  );
}

export default App;
