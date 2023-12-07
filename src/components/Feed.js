import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import Post from './Post';
import PostFilter from './MyPostsFilter';
import "./Feed.css";

function Feed({ filterType, currentUser, numberOfPostsPosted }) {
  const [posts, setPosts] = useState([]);
  const [selectedMood, setSelectedMood] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');

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
        query.descending(sortBy); 
      
        const results = await query.find();
        
        if (selectedMood !== 'all') {
          const filteredPosts = results.filter(post => post.get('mood') === selectedMood);
          setPosts(filteredPosts);
          updatePostsWithCommentCount(filteredPosts);
        } else {
          setPosts(results);
          updatePostsWithCommentCount(results);
        }

        
        
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    console.log("fetching posts");
    fetchPosts();
  }, [filterType, currentUser, numberOfPostsPosted, selectedMood, sortBy]);

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

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;

    if (selectedSort === 'date') {
      setSortBy('createdAt');
    } else if (selectedSort === 'popularity') {
      setSortBy('sips');
    }
  };

  return (
    <div className="FeedContent">
      <PostFilter setSelectedMood={setSelectedMood} handleSortChange={handleSortChange} />
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
