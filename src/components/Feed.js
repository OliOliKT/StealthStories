import React, { useState, useEffect } from "react";
import Parse from "parse";
import Post from "./Post";
import PostFilter from "./PostFilter";
import "./Feed.css";
import { useNavigate } from "react-router-dom";

// This function take filterType, currentUser and numberOfPostPosted as props
// As this is data being passed from parent component (Discover feed and Trending)
// to child component (Feed)
function Feed({ filterType, currentUser, numberOfPostsPosted }) {
  // it has the useStates post, mood and sortBy, as these all can have changes as the site is used
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt");
  // we also have the navigation, as when we click a post we need to be navigated to the given post.
  const navigate = useNavigate();

  // we have a event handler, which is responsible for handling a specific post being clicked
  const handleCommentIconClick = (postId) => {
    // console logs are just used for debuggin the code
    console.log("clicked");
    console.log(postId);
    navigate(`/posts/${postId}`);
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = new Parse.Query("Post");
        const currentUser = Parse.User.current();

        if (filterType === "sipsGreaterThanFifteen") {
          query.greaterThanOrEqualTo("sips", 15);
        } else if (filterType === "currentUserPosts" && currentUser) {
          query.equalTo("userObjectId", currentUser.id);
        }
        query.descending(sortBy);

        const results = await query.find();

        if (mood !== "all") {
          const filteredPosts = results.filter(
            (post) => post.get("mood") === mood
          );
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
  }, [filterType, currentUser, numberOfPostsPosted, mood, sortBy]);

  async function updatePostsWithCommentCount(posts) {
    const updatedPosts = [];
    for (const post of posts) {
      const updatedPost = post.toJSON();
      updatedPosts.push(updatedPost);
    }
    setPosts(updatedPosts);
  }

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;

    if (selectedSort === "date") {
      setSortBy("createdAt");
    } else if (selectedSort === "popularity") {
      setSortBy("sips");
    }
  };

  return (
    <div className="feed-content">
      <PostFilter setMood={setMood} handleSortChange={handleSortChange} />
      {posts.map((post) => (
        <Post
          postTitle={post.postTitle}
          mood={post.mood}
          postedBy={post.userId}
          postContent={post.postContent}
          sipCount={post.sips}
          postId={post.objectId}
          numberOfComments={post.comments}
          commentClickCallback={() => handleCommentIconClick(post.objectId)}
          daysAgo={Math.round(
            (new Date().getTime() - new Date(post.createdAt).getTime()) /
              (1000 * 3600 * 24)
          )}
        />
      ))}
    </div>
  );
}

export default Feed;
