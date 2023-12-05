import React, { useState, useEffect } from 'react';
import Parse from 'parse';
import "./CommentSection.css";
import Comment from "./Comment";

function CommentSection( { postId, numberOfComments } ) {
  const [comments, setComments] = useState([]);


  useEffect(() => {
    console.log("rendering")
    async function fetchComments() {
      try {
        const query = new Parse.Query("Comment");

        query.equalTo("postIdString", postId);
        
        query.descending("createdAt");

        const results = await query.find();
        setComments(results);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [postId, numberOfComments]);


  return (
    <div className ="comment-section-content">
      
      {comments.map((comment) => (
        
        <Comment
          key={comment.id}
          postedBy={comment.get("userIdString")}
          commentContent={comment.get("content")} 
          sipCount={comment.get("sips")}
          daysAgo = {Math.round((new Date().getTime() - comment.get("createdAt").getTime()) / (1000 * 3600 * 24))}
        />
      ))}
    </div>
  );
}

export default CommentSection;