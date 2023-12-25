import React, { useState } from "react";
import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import WritePost from '../components/WritePost';
import "./DiscoverFeed.css";


function DiscoverFeed() {
  const [numberOfPostsPosted, setNumberOfPostsPosted] = useState(0);

  const handlePostPosted = () => {
    setNumberOfPostsPosted(numberOfPostsPosted+1)
    console.log(numberOfPostsPosted);
  };

  return (
    <>
    <div className="main-content-discover-feed">
      <TopBar/>
      <FeedNavigation />
      <WritePost onPostPosted = {handlePostPosted}/>
      <Feed filterType="all" numberOfPostsPosted={numberOfPostsPosted}/>
    </div>
    <Footer/>
    </>
  );
}

export default DiscoverFeed;