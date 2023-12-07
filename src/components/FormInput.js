import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Parse from "parse";

import "./FormInput.css";

function LogInButtonAndFormInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const user = await Parse.User.logIn(email, password);
      console.log("Success! User ID:", user.id);
      navigate("/DiscoverFeed");
    } catch (error) {
      console.error("Error while logging in user", error);
      setError("Wrong username or password!");
    }
  };

  return (
    <div className="logIn">
      <div className="inputContainer">
        <div className="mail">
          <p>E-mail</p>
          <input
            type="email"
            className="login-mail-and-password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            className="login-mail-and-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="errorMessage">{error}</span>
      </div>
      <div className="logInBtn">
        <button className="signIn" onClick={handleLogin}>
          Log in
        </button>
      </div>
      <div className="noAccount">
        <p>No account? No worries!</p>
        <p>
          <Link to="/CreateUser">
            <a className="createAccount">Create one here</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogInButtonAndFormInput;
