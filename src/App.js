import "./App.css";
import Footer from "./components/footer";
import CommentComponent from "./components/CommentComponent";
import TopBar from "./components/topBarComponent";
import UserInfo from "./components/UserInfo";
import UserSettingsSidebar from "./components/UserSettingsSidebar";
import IndvidualPost from "./pages/IndividualPost";
import TrendingFeed  from "./pages/TrendingFeed";
import AccountInformation from "./components/AccountInformation";
import TwoFactorAuthentication from "./components/TwoFactorAuthentication";
import DeleteAccount from "./components/DeleteAccount";

function App() {
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

export default App;
