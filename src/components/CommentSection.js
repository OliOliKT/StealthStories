import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import Comment from "./Comment";
import ThreeDotsPopUp from './ThreeDotsPopUp';
import { addCommentLike, checkIfCommentLiked, deleteCommentLike } from "../repositories/commentRepository";
import "./CommentSection.css";


function CommentSection( { postId, numberOfComments } ) {
  const [comments, setComments] = useState([]);
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const currentUser = Parse.User.current();

  const toggleThreeDotsPopUp = () => {
    setPopUpVisible(!isPopUpVisible);
    console.log("Three dots clicked!")
  };

  useEffect(() => {
    console.log("rendering")
    async function fetchComments() {
      try {
        const query = new Parse.Query("Comment");

        query.equalTo("postIdString", postId);
        
        query.ascending("createdAt");

        const results = await query.find();
        setComments(results);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [postId, numberOfComments]);



  const handleSipOnComment = async (userId, commentId) => {
  console.log("handleSipOnComment called")
  try {
    const check = await checkIfCommentLiked(userId, commentId);
    console.log("LOOK HERE", check);
    if (check) {
      deleteCommentLike(userId, commentId);
    } else {
      addCommentLike(userId, commentId);
    }
  } catch (error) {
    console.error("Error handling sip on comment:", error);
  }
};



  return (
    <div className ="comment-section-content">
      
      {comments.map((comment) => (
        
        <Comment
          key={comment.id}
          postedBy={comment.get("userIdString")}
          commentContent={comment.get("content")} 
          sipCount={comment.get("sips")}
          daysAgo = {Math.round((new Date().getTime() - comment.get("createdAt").getTime()) / (1000 * 3600 * 24))}
          ellipsesOnClick = {() => toggleThreeDotsPopUp}
          handleSip = {() => handleSipOnComment(currentUser.id, comment.id)}
        />
      ))}
      {isPopUpVisible && (
          <ThreeDotsPopUp/>
      )}
    </div>
  );
}

export default CommentSection;