import React, { useState } from "react";
import Parse from "parse";

import "./CommentComponent.css";

const WriteComment = ({ postId, closeCommentModal, onCommentPosted }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    closeCommentModal();
    const Comment = Parse.Object.extend("Comment");
    const newComment = new Comment();

    newComment.set("content", comment);
    newComment.set("userId", Parse.User.current());
    newComment.set("postIdString", postId);
    newComment.set("userIdString", Parse.User.current().get("username"));

    try {
      await newComment.save();
      console.log("Post saved successfully!");
      // Fetch the corresponding post
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      const post = await query.get(postId);

      // Increment the commentCount for the post
      post.increment("comments");
      await post.save();
      console.log("Post commentCount incremented!");

    } catch (error) {
      console.error("Error saving comment:", error);
    }
    onCommentPosted();
   
  };
  
  return (
    <section className="writeComment">
      <CommentBox 
        comment={comment}
        onCommentChange={handleCommentChange}
        onCommentSubmit={handleCommentSubmit}
      />
    </section>
  );
};

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
    <div className="commentBorder">
      <CommentIcons />
      <SendCommentIcon onCommentSubmit={onCommentSubmit} />
    </div>
  );
};

const CommentIcons = () => {
  return (
    <div className="commentIcons">
      <i className="fa-solid fa-image"></i>
      <i className="fa-solid fa-rainbow"></i>
    </div>
  );
};

const SendCommentIcon = ({ onCommentSubmit }) => {
  return (
    <div className="postComment" onClick={onCommentSubmit}>
      <i className="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WriteComment;
