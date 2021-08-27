import React from "react";
import UserList from "./UserList";
import './App.css'

const App = () => {

  return (
    <div> 
      <h1 className="title"> liste des Utilisateurs</h1>
      <hr/>
   <UserList/>
    </div>
  );
 };
 export default App;