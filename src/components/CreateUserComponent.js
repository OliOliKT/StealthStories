import React from "react";
import "./CreateUserComponent.css";
import CreateUserButtonAndText from "./CreateUserButtonAndText";

function CreateUser() {
  return (
    <div className="create-user-component">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="create-user-box">
        <CreateUserButtonAndText />
      </div>
    </div>
  );
}

export default CreateUser;
