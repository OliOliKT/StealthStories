import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import Post from './Post';
import PostFilter from './MyPostsFilter';
import "./Feed.css";
import { useNavigate, useLocation } from 'react-router-dom';

function Feed({ filterType, currentUser, numberOfPostsPosted }) {
  const [posts, setPosts] = useState([]);
  const [selectedMood, setSelectedMood] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const navigate = useNavigate(); 

  /* Navigates to the individualPost page, brining with the postId of the post being clicked*/
  const handleCommentIconClick = (postId) => {
    console.log('clicked');
    console.log(postId);
    navigate(`/posts/${postId}`);
    
  };

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
    
      const updatedPost = post.toJSON()
      
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
          key={post.objectId}
          postTitle={post.postTitle}
          mood={post.mood}
          postedBy={post.userId}
          postContent={post.postContent}
          sipCount={post.sips}
          postId={post.objectId}
          currentUser={currentUser}
          numberOfComments={post.comments}
          commentClickCallback={() => handleCommentIconClick(post.objectId)}
        />
      ))}
    </div>
  );
}

export default Feed;
