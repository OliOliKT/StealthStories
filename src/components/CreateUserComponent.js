import React from "react";
import "./CreateUserComponent.css";
import CreateUserButtonAndText from "./CreateUserButtonAndText";
import BackToLoginButton from "./BackToLogin";

function CreateUser() {
  return (
    <div className="create-user-component">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="create-user-box">
        <CreateUserButtonAndText />
        <BackToLoginButton />
      </div>
    </div>
  );
}

export default CreateUser;
