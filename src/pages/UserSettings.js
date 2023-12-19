import React from "react";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import UserInfo from "../components/UserInfo";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import AccountInformation from "../components/AccountInformation";
import TwoFactorAuthentication from "../components/TwoFactorAuthentication";
import "./UserSettings.css";
import "../components/NotImplemented.css";

function UserSettings() {
  return (
    <>
      <div className="user-settings-main-content">
        <TopBar />
        <UserInfo />
        <UserSettingsSidebar />
        <AccountInformation />
        <TwoFactorAuthentication />
        <div className="delete-account not-implemented">
          <h2>Delete account</h2>
          <p>
            If you delete your account you can never retrieve any information
            from it again.
          </p>
          <div className="two-factor-buttons">
            <button className="delete-account-button">Delete account</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserSettings;
