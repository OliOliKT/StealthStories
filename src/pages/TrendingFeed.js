import React from "react";
import "./TrendingFeed.css"; // The corresponding CSS file

//Components
import FeedNavigation from "../components/FeedNavigation";
import TrendingBlock from "../components/TrendingBlock";
import Feed from "../components/Feed";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";

function TrendingFeed() {
  return (
    <div className="main-content">
      <TopBar />
      <TrendingBlock />
      <FeedNavigation />
      <Feed />
      <Footer />
    </div>
  );
}

export default TrendingFeed;
