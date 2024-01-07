import React, { useState } from "react";
import Parse from "parse";
import "./WriteComment.css";

function WriteComment({ postId, onCommentPosted }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    const Comment = Parse.Object.extend("Comment");
    const newComment = new Comment();

    newComment.set("content", comment);
    newComment.set("userId", Parse.User.current());
    newComment.set("postIdString", postId);
    newComment.set("userIdString", Parse.User.current().get("username"));

    try {
      await newComment.save();
      console.log("Post saved successfully!");
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      const post = await query.get(postId);

      post.increment("comments");
      await post.save();
      console.log("Post commentCount incremented!");
    } catch (error) {
      console.error("Error saving comment:", error);
    }
    onCommentPosted();
  };

  return (
    <section className="write-comment">
      <CommentBox
        comment={comment}
        onCommentChange={handleCommentChange}
        onCommentSubmit={handleCommentSubmit}
      />
    </section>
  );
}

const CommentBox = ({ comment, onCommentChange, onCommentSubmit }) => {
  return (
    <div>
      <textarea
        id="comment"
        value={comment}
        onChange={onCommentChange}
        placeholder="Write your comment here..."
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
