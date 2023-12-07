import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";

import "./CreateUserButtonAndText.css";

const CreateNewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("The passwords doesn't match, try again! :)");
      return;
    }

    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);

    try {
      await user.signUp();
      navigate("/");
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <div className="creater-user-box">
      <div className="inputContainer">
        <div className="username">
          <p>Username</p>
          <input
            type="username"
            className="inputUsernameAndMailAndPassword"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mail">
          <p>E-mail</p>
          <input
            type="email"
            className="inputUsernameAndMailAndPassword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            className="inputUsernameAndMailAndPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="verifyPassword">
          <p>Confirm Password</p>
          <input
            type="password"
            className="inputUsernameAndMailAndPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <span className="errorMessage">{error}</span>
      </div>
      <div className="create-user">
        <button className="create-user-btn" onClick={handleSignup}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default CreateNewUser;
