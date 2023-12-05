import Footer from "../components/footer";
import TopBar from "../components/topBarComponent";
import UserInfo from "../components/UserInfo";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import AccountInformation from "../components/AccountInformation";
import TwoFactorAuthentication from "../components/TwoFactorAuthentication";
import DeleteAccount from "../components/DeleteAccount";
import "./UserSettings.css";
 
function UserSettings() {
  return (
    <>
    <div className="user-settings-main-content">
      <TopBar />
      <UserInfo />
      <UserSettingsSidebar/>
      <AccountInformation />
      <TwoFactorAuthentication />
      <DeleteAccount />
    </div>
    <Footer />
    </>
  );
}

export default UserSettings;
