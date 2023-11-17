import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import "./Feed.css";
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = new Parse.Query("Post");
        const results = await query.find();
        setPosts(results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="FeedContent">
      {posts.map((post, index) => (
        <Post
          key={index}
          postTitle={post.get("postTitle")}
          mood={post.get("mood")} 
          postedBy={post.get("userId")}
          postContent={post.get("postContent")} 
        />
      ))}
    </div>
  );
}

export default Feed;
