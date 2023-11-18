import { useState } from "react";
import "./CreateUserButtonAndText.css";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

const CreateNewUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Please make sure the passwords match.");
      return;
    }

    const user = new Parse.User();
    user.setUsername(email);
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
        <div className="mail">
          <p>E-mail</p>
          <input
            type="email"
            className="inputMailAndPassword"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            className="inputMailAndPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="verifyPassword">
          <p>Confirm Password</p>
          <input
            type="password"
            className="inputMailAndPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
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
