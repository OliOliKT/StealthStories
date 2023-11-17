import React from "react";
import "./TrendingFeed.css"; // The corresponding CSS file

//Components
import FeedNavigation from "../components/FeedNavigation";
import TrendingBlock from "../components/TrendingBlock";
import Feed from "../components/Feed";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import WritePost from '../components/writePost';

function TrendingFeed() {
  return (
    <>
    <div className="main-content">
      <TopBar />
      <TrendingBlock />
      <FeedNavigation />
      <WritePost/>
      <Feed />
    </div>
    <Footer />
    </>
  );
}

export default TrendingFeed;
