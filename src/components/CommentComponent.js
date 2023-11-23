import React, { useState } from "react";
import "./CommentComponent.css";

const WriteComment = ({ postId, closeCommentModal, onCommentPosted }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    // replace this logic with database callbacks.
    console.log("Comment submitted:", comment, "for postId:", postId);
    onCommentPosted();
    closeCommentModal();
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
