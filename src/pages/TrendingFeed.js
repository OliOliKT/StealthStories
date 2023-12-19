import React from "react";

import FeedNavigation from "../components/FeedNavigation";
import TrendingBlock from "../components/TrendingBlock";
import Feed from "../components/Feed";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import WritePost from "../components/WritePost";
import "./TrendingFeed.css";

function TrendingFeed() {
  return (
    <>
    <div className="main-content">
      <TopBar />
      <TrendingBlock />
      <FeedNavigation />
      <WritePost/>
      <Feed filterType="sipsGreaterThanFifteen" />
    </div>
    <Footer />
    </>
  );
}

export default TrendingFeed;
