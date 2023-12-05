import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import "./Feed.css";
import Post from './Post';
import PostFilter from './MyPostsFilter';

function Feed({ filterType, currentUser, numberOfPostsPosted}) {
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
        query.descending("createdAt");
      
        const results = await query.find();
        
        setPosts(results);
        updatePostsWithCommentCount(results);
        
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    console.log("fetchig posts");
    fetchPosts();
  }, [filterType, currentUser, numberOfPostsPosted]);

  async function updatePostsWithCommentCount(posts) {
    const updatedPosts = [];

    for (const post of posts) {
      const commentQuery = new Parse.Query(Parse.Object.extend("Comment"));
      commentQuery.equalTo("postIdString", post.id);
      const count = await commentQuery.count();
      
      const updatedPost = {
        ...post.toJSON(), 
        numberOfComments: count,
      };
      
      updatedPosts.push(updatedPost);
    }

    setPosts(updatedPosts);
  }

  return (
    <div className="FeedContent">
      <PostFilter/>
      {posts.map((post) => (
        <Post
          key={post.id}
          postTitle={post.postTitle}
          mood={post.mood}
          postedBy={post.userId}
          postContent={post.postContent}
          sipCount={post.sips}
          postId={post.objectId}
          currentUser={currentUser}
          numberOfComments={post.numberOfComments}
        />
      ))}
    </div>
  );
}

export default Feed;
