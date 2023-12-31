import React, { useState } from "react";
import FeedNavigation from "../components/FeedNavigation";
import TrendingBlock from "../components/TrendingBlock";
import Feed from "../components/Feed";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import WritePost from "../components/WritePost";
import "./TrendingFeed.css";

function TrendingFeed() {
  const [numberOfPostsPosted, setNumberOfPostsPosted] = useState(0);

  const handlePostPosted = () => {
    setNumberOfPostsPosted(numberOfPostsPosted + 1);
    console.log(numberOfPostsPosted);
  };

  return (
    <>
      <div className="main-content-trending-feed">
        <TopBar />
        <TrendingBlock />
        <FeedNavigation />
        <WritePost onPostPosted={handlePostPosted} />
        <Feed filterType="sipsGreaterThanFifteen" />
      </div>
      <Footer />
    </>
  );
}

export default TrendingFeed;
