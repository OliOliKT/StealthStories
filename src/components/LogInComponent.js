import React from "react";
import "./LogInComponent.css";
import LogInButtonAndText from "./LogInButtonAndText";

function LogInComponent() {
  return (
    <div className="login-component">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="login-box">
        <LogInButtonAndText />
      </div>
    </div>
  );
}

export default LogInComponent;
