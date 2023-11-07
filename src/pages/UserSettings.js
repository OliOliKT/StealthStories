import Footer from "../components/footer";
import TopBar from "../components/topBarComponent";
import UserInfo from "../components/UserInfo";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import AccountInformation from "../components/AccountInformation";
import TwoFactorAuthentication from "../components/TwoFactorAuthentication";
import DeleteAccount from "../components/DeleteAccount";

function UserSettings() {
  return (
    <div className="App">
      <TopBar />
      <UserInfo />
      <UserSettingsSidebar />
      <AccountInformation />
      <TwoFactorAuthentication />
      <DeleteAccount />
      <Footer />
    </div>
  );
}

export default UserSettings;
