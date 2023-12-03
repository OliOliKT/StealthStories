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
        const currentUser = Parse.User.current();

        if (filterType === "sipsGreaterThanTen") {
          query.greaterThanOrEqualTo("sips", 10);
        } else if (filterType === "currentUserPosts" && currentUser) {
          query.equalTo("userObjectId", currentUser.id);
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
          currentUser={currentUser}
        />
      ))}
    </div>
  );

}

export default Feed;