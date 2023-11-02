import React from 'react';
import "./Feed.css";

import Post from './Post';

function Feed() {
  return (
    <div className="FeedContent">
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Feed;