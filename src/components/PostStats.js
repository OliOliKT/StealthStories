import React, { useState, useEffect } from "react";
import Parse from "parse";
import "./PostStats.css";

// this component is responsible for showing the current user its posts stats (how many post it has and comments)
function PostStats() {
  /* two useStates: 
  total posts, with the default value of 0 
  total comments, with the default value of 0 */
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  // useEffect is responsible for fecthing the data from the Parse backend.
  useEffect(() => {
    // fetches the current user, to display posts from that specific user
    const currentUser = Parse.User.current();
    const currentUserObjectId = currentUser.id;

    // creating a const to fetch the pata from our Post class in our backend.
    const Post = Parse.Object.extend("Post");
    const postQuery = new Parse.Query(Post);
    // fetch the data of the Post class if the user id is equal to the current users id
    postQuery.equalTo("userObjectId", currentUserObjectId);
    // Execute the query to count the number of posts that meet the specified condition.
    // This is a Promise chain:
    // .count() initiates the query and returns a Promise that resolves with the count of posts for the current user.
    postQuery
      .count()
      // The .then() method is called when the Promise resolves successfully.
      // The count of posts is received and used to update the totalPosts state.
      .then((count) => {
        // updates the totalPosts state so it displayes number of post the user has written
        setTotalPosts(count);
      })
      // displays error if the Promise can't be resolved.
      .catch((error) => {
        console.error("Error fetching total posts: ", error);
      });

    // same logic as with the posts, just for comments.
    const Comment = Parse.Object.extend("Comment");
    const commentQuery = new Parse.Query(Comment);
    commentQuery.equalTo("userId", currentUserObjectId);
    commentQuery
      .count()
      .then((count) => {
        setTotalComments(count);
      })
      .catch((error) => {
        console.error("Error fetching total comments: ", error);
      });
  }, []);

  return (
    <>
      <div id="stats">
        <div id="stat-1" className="stat-box">
          <p>Total posts</p>
          <p>{totalPosts}</p>
        </div>
        <div id="stat-2" className="stat-box">
          <p>Total comments</p>
          <p>{totalComments}</p>
        </div>
      </div>
    </>
  );
}

export default PostStats;
