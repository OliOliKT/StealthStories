import React from "react";

import FeedNavigation from "../components/FeedNavigation";
import TrendingBlock from "../components/TrendingBlock";
import Feed from "../components/Feed";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import WritePost from '../components/writePost';
import "./TrendingFeed.css";

function TrendingFeed() {
  return (
    <>
    <div className="main-content">
      <TopBar />
      <TrendingBlock />
      <FeedNavigation />
      <WritePost/>
      <Feed filterType="sipsGreaterThanTen" />
    </div>
    <Footer />
    </>
  );
}

export default TrendingFeed;
