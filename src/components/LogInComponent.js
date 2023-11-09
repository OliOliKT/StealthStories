import React from "react";
import "./LogInComponent.css";
import LogInButtonAndText from "./LogInButtonsAndText";

function LogInComponent() {
  return (
    <div id="logInBox">
      <div id="SignInImage">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div id="logInOuterBox">
        <LogInButtonAndText />
      </div>
    </div>
  );
}

export default LogInComponent;
