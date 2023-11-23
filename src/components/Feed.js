import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import "./Feed.css";
import Post from './Post';

function Feed({ filterType, currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = new Parse.Query("Post");

        if (filterType === "sipsGreaterThanTen") {
          query.greaterThanOrEqualTo("sips", 10);
        } else if (filterType === "currentUserPosts" && currentUser) {
          query.equalTo("userId", currentUser);
        }
        query.descending("updatedAt");

        const results = await query.find();
        setPosts(results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [filterType, currentUser]);

  return (
    <div className="FeedContent">
      {posts.map((post) => (
        <Post
          key={post.id}
          postTitle={post.get("postTitle")}
          mood={post.get("mood")} 
          postedBy={post.get("userId")}
          postContent={post.get("postContent")} 
          sipCount={post.get("sips")}
          postId={post.id}
          currentUser={currentUser} // Pass current user to check ownership for isSipped
        />
      ))}
    </div>
  );

}

export default Feed;
