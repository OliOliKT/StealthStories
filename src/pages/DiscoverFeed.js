import React, { useState } from "react";
import FeedNavigation from "../components/FeedNavigation";
import Feed from "../components/Feed";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import WritePost from "../components/WritePost";
import "./DiscoverFeed.css";

// Parent component, which manages state relevant for its child components.
function DiscoverFeed() {
  const [numberOfPostsPosted, setNumberOfPostsPosted] = useState(0);

  const handlePostPosted = () => {
    setNumberOfPostsPosted(numberOfPostsPosted + 1);
    console.log(numberOfPostsPosted);
  };

  return (
    <>
      <div className="main-content-discover-feed">
        <TopBar />
        <FeedNavigation />
        {/* DiscoverFeed renders the Feed component and passes props onPostPosted to WritePost */}
        <WritePost onPostPosted={handlePostPosted} />
        {/* DiscoverFeed renders the Feed component and passes props filterType and numberOfPostPosted
        to Feed */}
        <Feed filterType="all" numberOfPostsPosted={numberOfPostsPosted} />
      </div>
      <Footer />
    </>
  );
}

export default DiscoverFeed;
