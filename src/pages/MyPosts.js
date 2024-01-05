import PostStats from "../components/PostStats";
import Feed from "../components/Feed";
import TopBarComponent from "../components/TopBar";
import Footer from "../components/Footer";
import UserSettingsSidebar from "../components/UserSettingsSidebar";
import "./MyPosts.css";

function MyPosts() {
  
  return (
    <>
      <TopBarComponent />
      <div className="my-posts-main-content">
        <UserSettingsSidebar className="sidebar-my-posts" activePage="MyPosts" />
        <h1 id="your-post-title">My stories</h1>
        <PostStats />
        <Feed filterType="currentUserPosts" />
      </div>
      <Footer />
    </>
  );
}

export default MyPosts;
