import React from "react";
import ChangePasswordComponent from "../components/ChangePasswordComponent";
import Footer from "../components/footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import TopBar from "../components/topBarComponent";
import "./ChangePasswordPage.css";

function ChangePasswordPage() {
    return (
      <>
        <TopBar />
        <div className="change-password-grid">
          <UserSettingsSidebar className="sidebar-content" />
          <div className="change-password-main-content">
            <ChangePasswordComponent />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
export default ChangePasswordPage;
