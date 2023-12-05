import React, { useState } from "react";
import "./DiscoverFeed.css";

import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';
import TopBar from '../components/topBarComponent';
import Footer from '../components/footer';
import WritePost from '../components/writePost';

//const WritePost = ({onPostPosted}) => {


const DiscoverFeed = ({}) => {

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