import React, { useState, useEffect } from "react";
import Parse from "parse";
import Comment from "./Comment";
import {
  addCommentLike,
  checkIfCommentLiked,
  deleteCommentLike,
  fetchComment,
} from "../repositories/commentRepository";
import "./CommentSection.css";

function CommentSection({ postId, numberOfComments }) {
  const [comments, setComments] = useState({});
  const currentUser = Parse.User.current();

  useEffect(() => {
    console.log("Rendering...");
    async function fetchComments() {
      try {
        const query = new Parse.Query("Comment");
        query.equalTo("postIdString", postId);
        query.ascending("createdAt");
        const results = await query.find();
        console.log("RESULT " + results.map((x) => x.id));
        const updatedComments = { ...comments };

        for (const result of results) {
          updatedComments[result.id] = result.toJSON();
          console.log("COMMENTS " + result.id);
        }

        setComments(updatedComments);
        
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [postId, numberOfComments]);

  async function changeSipCount(factor, commentId) {
    const commentToUpdate = comments[commentId];
    commentToUpdate.sips += 1 * factor;
    const sips = commentToUpdate.sips;
    const dbComment = await fetchComment(commentId);
    dbComment.set("sips", sips);
    dbComment.save();
    const updatedComments = {
      ...comments,
      [commentId]: commentToUpdate,
    };
    setComments(updatedComments);
  }

  // Uses functions from the commentRepository to add or delete a commentLike from the database
  // See 'src/repositories' folder
  const handleSipOnComment = async (userId, commentId) => {
    console.log("handleSipOnComment called");
    const commentToUpdate = comments[commentId];
    try {
      const check = await checkIfCommentLiked(userId, commentId);
      if (check) {
        deleteCommentLike(userId, commentId);
        changeSipCount(-1, commentId);
        commentToUpdate.isSipped = false;
      } else {
        addCommentLike(userId, commentId);
        changeSipCount(1, commentId);
        commentToUpdate.isSipped = true;
      }
    } catch (error) {
      console.error("Error handling sip on comment:", error);
    }
  };

  return (
    <div className="comment-section-content">
      {Object.entries(comments).map(([commentId, comment]) => (
        <Comment
          key={commentId}
          postedBy={comment.userIdString}
          commentContent={comment.content}
          sipCount={comment.sips}
          daysAgo={Math.round(
            (new Date().getTime() - new Date(comment.createdAt).getTime()) /
              (1000 * 3600 * 24)
          )}
          handleSip={() => handleSipOnComment(currentUser.id, commentId)}
          isSipped={comment.isSipped}
        />
      ))}
    </div>
  );
}

export default CommentSection;
