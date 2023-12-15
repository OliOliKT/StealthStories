import React from "react";

import CreateUserButtonAndText from "./CreateUserButtonAndText";
import BackToLoginButton from "./BackToLogin";
import "./CreateUserComponent.css";

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
