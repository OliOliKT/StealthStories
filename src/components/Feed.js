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

  // This useEffect is responsible for fetching the Post class from our backend
  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = new Parse.Query("Post");
        // Fetches the current user for the MyPosts component to filter post based on the current user
        const currentUser = Parse.User.current();

        /* Given the parent component (either TrendingFeed, DiscoverFeed, or MyPosts ) 
        the Feed will be given one of the filterType props (sipsGreaterThanFifteen, all, currentUserPosts)
        and know which feed to show.  */
        if (filterType === "sipsGreaterThanFifteen") {
          // greaterThanOrEqualTo is a Parse function - takes a key-value pair as parameter
          query.greaterThanOrEqualTo("sips", 15);
        } else if (filterType === "currentUserPosts" && currentUser) {
          query.equalTo("userObjectId", currentUser.id);
        }
        // this should sort the post desceding
        query.descending(sortBy);
        // the await const stops the async function temporaly until the Promise of the function is resolved
        // The Promise being to find the correct data from the Parse backend
        // the const results has assigned the array of the posts returned by query.find()
        const results = await query.find();
        // we can now use the results const to filter properties in the results array (containing the data from the Posts class)
        if (mood !== "all") {
          // this ensures that the mood filter in the feed is equal to the mood set by the user
          const filteredPosts = results.filter(
            // this is given by the child component Post
            (post) => post.get("mood") === mood
          );
          // udpates the State of posts by the filter
          setPosts(filteredPosts); // redundant, because we have created updatePostsWithCommentCount that updates the state
          // updatePostsWithCommentCount is run with filteredPost as parameter
          updatePostsWithCommentCount(filteredPosts);
        } else {
          // else it displays everything, as results contains all posts given by the Post class
          setPosts(results); // redundant, because we have created updatePostsWithCommentCount that updates the state
          updatePostsWithCommentCount(results);
        }
        // If the Promise is rejected this error is thrown
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    console.log("fetching posts");
    fetchPosts();
    // This are the depencies, which the useEffect depend on to re-run
  }, [filterType, currentUser, numberOfPostsPosted, mood, sortBy]);

  // This function is responsible for taking each post and storing it in a JSON file
  // It also updated the components state
  async function updatePostsWithCommentCount(posts) {
    const updatedPosts = [];
    for (const post of posts) {
      const updatedPost = post.toJSON();
      updatedPosts.push(updatedPost);
    }
    setPosts(updatedPosts);
  }

  // Event handler that sorts either by date or popularity
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
      {/* Renders PostFilter
      passes mood and sortChange to Post */}
      <PostFilter setMood={setMood} handleSortChange={handleSortChange} />
      {/* Renders Post component
      passes the props to Posts */}
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
