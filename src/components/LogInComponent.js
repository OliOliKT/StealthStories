import React from "react";
import "./LogInComponent.css";
import FormInput from "./FormInput";

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
