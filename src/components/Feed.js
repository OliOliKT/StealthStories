import React, { useState, useEffect } from "react";
import Parse from "parse";
import Post from "./Post";
import PostFilter from "./PostFilter";
import "./Feed.css";
import { useNavigate } from "react-router-dom";

function Feed({ filterType, numberOfPostsPosted }) {
  const [posts, setPosts] = useState([]);
  const [mood, setMood] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt");
  const navigate = useNavigate();

  const handleCommentIconClick = (postId) => {
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
        } else if (filterType === "currentUserPosts" && currentUser.id) {
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
  }, [filterType, numberOfPostsPosted, mood, sortBy]);

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
      <PostFilter mood={mood} setMood={setMood} handleSortChange={handleSortChange} />
      {posts.map((post) => (
        <Post
          key={post.objectId}
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
