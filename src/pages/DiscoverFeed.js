import React from 'react';
import "./DiscoverFeed.css";

import FeedNavigation from '../components/FeedNavigation';
import Feed from '../components/Feed';
import TopBar from '../components/topBarComponent';
import Footer from '../components/footer';

function DiscoverFeed() {
  return (
    <div className="main-content">
      <TopBar/>
      <FeedNavigation />
      <Feed/>
      <Footer/>
    </div>
  );
}

export default DiscoverFeed;