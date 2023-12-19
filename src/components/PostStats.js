import React, { useState, useEffect } from "react";
import Parse from "parse";
import "./PostStats.css";

function PostStats() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    const currentUser = Parse.User.current();
    const currentUserObjectId = currentUser.id;

    const Post = Parse.Object.extend("Post");
    const postQuery = new Parse.Query(Post);
    postQuery.equalTo("userObjectId", currentUserObjectId);
    postQuery
      .count()
      .then((count) => {
        setTotalPosts(count);
      })
      .catch((error) => {
        console.error("Error fetching total posts: ", error);
      });

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
