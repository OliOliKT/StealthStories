import React from 'react';
import "./CommentSection.css"; // The corresponding CSS file
import Comment from "./Comment";

function CommentSection() {
  return (
    <div className ="comment-section-content">
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default CommentSection;