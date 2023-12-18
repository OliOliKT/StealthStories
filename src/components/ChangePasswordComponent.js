import React, { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom"; 
import "./FormInput.css"; 

const ChangePasswordComponent = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleChangePassword = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (newPassword !== confirmPassword) {
      setError("The new passwords do not match.");
      return;
    }

    const currentUser = Parse.User.current();
    
    if (currentUser) {
      try {
        // Attempt to re-authenticate the user
        await Parse.User.logIn(currentUser.get("username"), oldPassword);
        // If successful, update the password
        currentUser.setPassword(newPassword);
        await currentUser.save();
        
        // If you want to log out the user after password change uncomment below line
        await Parse.User.logOut();
        
        // Redirect to login page or inform the user
        alert('Password changed successfully. Please log in with your new password.');
        navigate('/'); // Redirect to the login page, which is the root path
        
        setError(""); // Clear any previous errors
        // Reset state if needed
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        setError("Error while changing password: " + error.message);
      }
    } else {
      setError("No user is currently logged in.");
    }
  };

  return (

<div className="login-component">
      <div className="login-box">
        <form onSubmit={handleChangePassword} className="input-container">
          <div className="password">
            <p>Old Password</p>
            <input
              type="password"
              className="login-mail-and-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="password">
            <p>New Password</p>
            <input
              type="password"
              className="login-mail-and-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="password">
            <p>Confirm New Password</p>
            <input
              type="password"
              className="login-mail-and-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <span className="error-message">{error}</span>
          <div className="log-in-btn">
            <button type="submit" className="sign-in change-password-btn">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );  
}

export default ChangePasswordComponent;
