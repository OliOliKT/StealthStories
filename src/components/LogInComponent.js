import React from "react";

import FormInput from "./FormInput";
import "./LogInComponent.css";

function LogInComponent() {
  return (
    <div className="login-component">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="login-box">
        <FormInput />
      </div>
    </div>
  );
}

export default LogInComponent;
