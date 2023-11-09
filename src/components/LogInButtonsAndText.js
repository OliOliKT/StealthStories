import React from "react";
import "./LogInButtonsAndText.css";

function LogInButtonAndText() {
  return (
    <div id="logIn">
      <div id="mail">
        <p>E-mail</p>
        <input id="inputMailAndPassword" />
        <div id="password">
          <p>Password</p>
          <input id="inputMailAndPassword" />
        </div>
        <div id="logInBtn">
          <button id="signIn">Log in</button>
        </div>
        <div id="noAccount">
          <p>No account? No worries!</p>
          <p>
            <a id="createAccount" href="#">
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogInButtonAndText;
