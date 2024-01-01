import React, { useState } from "react";
import Parse from "parse";
import "./WriteComment.css";

// child component of IndividualPost
// gets the props from IndividualPost
function WriteComment({ postId, clearCommentForm, onCommentPosted }) {
  // initial state is empty
  const [comment, setComment] = useState("");

  // eventHandler - updates the comment state when the user is typing the comment
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // handles the comment submission
  const handleCommentSubmit = async () => {
    // prob from parent, is responsible if the writeComment component is displayed or not
    clearCommentForm(); // this is a bit redundant because we also have onCommentPosted(), but it makes it faster to hide WriteComment component
    // creates a varibale Comment, which represents the comments in the database
    const Comment = Parse.Object.extend("Comment");
    // A instance of Comment is created, and this allows us to save a new comment to the database
    const newComment = new Comment();
    // we set these values with the comment - tied to the database.
    newComment.set("content", comment);
    newComment.set("userId", Parse.User.current());
    newComment.set("postIdString", postId);
    newComment.set("userIdString", Parse.User.current().get("username"));

    try {
      // await the promise of creating the new comment and saving it
      await newComment.save();
      console.log("Post saved successfully!");
      // Retrieves a specific post
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      const post = await query.get(postId);
      // increments the value of comments in the database with 1 for that specific post
      post.increment("comments");
      await post.save();
      console.log("Post commentCount incremented!");
    } catch (error) {
      // error if it doesn't save
      console.error("Error saving comment:", error);
    }
    // set isCommenting to false, and makes sure that the WriteComment component is no longer displayed
    onCommentPosted();
  };

  return (
    <section className="write-comment">
      <CommentBox
        comment={comment}
        // updates the comments state
        onCommentChange={handleCommentChange}
        // sumbits the comment and make the and close the WriteComment
        onCommentSubmit={handleCommentSubmit}
      />
    </section>
  );
}
// sub-component for the comment-box
const CommentBox = ({ comment, onCommentChange, onCommentSubmit }) => {
  return (
    <div>
      <textarea
        id="comment"
        value={comment}
        onChange={onCommentChange}
        placeholder="Write your comment here..."
        // makes sure the WriteComment component is in row 5 in the grid
        rows="5"
      ></textarea>
      <CommentBorder onCommentSubmit={onCommentSubmit} />
    </div>
  );
};

const CommentBorder = ({ onCommentSubmit }) => {
  return (
    <div className="comment-border">
      <div className="comment-icons not-implemented">
        <i className="fa-solid fa-image"></i>
        <i className="fa-solid fa-rainbow"></i>
      </div>
      <SendCommentIcon onCommentSubmit={onCommentSubmit} />
    </div>
  );
};

const SendCommentIcon = ({ onCommentSubmit }) => {
  return (
    <div className="post-comment" onClick={onCommentSubmit}>
      <i className="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WriteComment;
