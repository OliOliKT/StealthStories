import React from 'react';
import "./DiscoverFeed.css";

import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';
import TopBar from '../components/topBarComponent';
import Footer from '../components/footer';
import WritePost from '../components/writePost';

function DiscoverFeed() {
  return (
    <>
    <div className="main-content">
      <TopBar/>
      <FeedNavigation />
      <WritePost/>
      <Feed filterType="all"/>
    </div>
    <Footer/>
    </>
  );
}

export default DiscoverFeed;