import React, { useState } from "react";

import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import WritePost from '../components/writePost';
import "./DiscoverFeed.css";


const DiscoverFeed = () => {

  const [numberOfPostsPosted, setNumberOfPostsPosted] = useState(0);

  const handlePostPosted = () => {
    setNumberOfPostsPosted(numberOfPostsPosted+1)
    console.log(numberOfPostsPosted);
  };

  return (
    <>
    <div className="main-content">
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