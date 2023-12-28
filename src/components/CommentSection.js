import React, { useState, useEffect } from "react";
import Parse from "parse";
import Comment from "./Comment";
// From the CommenRepository the following fuctions are imported:
import {
  addCommentLike,
  checkIfCommentLiked,
  deleteCommentLike,
  fetchComment,
} from "../repositories/CommentRepository";
import "./CommentSection.css";

// This CommentSection component is the parent component of Comment.js
// This means that CommentSection can pass data and functions down to Comment via props

// The CommentSection function takes the parameters postID and numberOfComments,
// Which means it retrieves the current posts, and the number of comments it has.
function CommentSection({ postId, numberOfComments }) {
  // We create a useState for the comments
  const [comments, setComments] = useState({});
  // We grab the current user from Parse, so the user can be tied to the post they like
  const currentUser = Parse.User.current();

  // Here we use the useEffect to fetch comment data from the Parse backend
  // and update the state with this data.
  // We use useEffect because it fetching data is a side effect (asynchronous interaction
  // with an ecternal system)
  useEffect(() => {
    console.log("Rendering comments...");
    // Since the useEffect can't be async itself, you can create a async function within
    // We make it async because we don't want the application to become unresponsive, when the data is fecthed.
    // So making it asynchronous makes us able to press other stuff, while comments are retrieved from the database.
    async function fetchComments() {
      try {
        // It passes a query fecthing the data from the Comment class
        const query = new Parse.Query("Comment");
        // It only retrieves the comments which also contains the postId, named postIdString in our backend.
        query.equalTo("postIdString", postId);
        // Then it sorts the comments by ascending (old ones first) by looking at the attribute "createdAt", which is specified in our backend.
        query.ascending("createdAt");
        // because the fetchComments returns a Promise, we have the await keyword,
        // which we use to wait for the Promise.
        // If the Promies is succesfull then the data will be assigned to "results"
        // .find() takes the query we set up and send it to the parse server
        const results = await query.find();
        // Debugging line that maps the comments to the post
        console.log("RESULT " + results.map((x) => x.id));
        // We have this so we can write a new comment.
        // It is called "shallow copying", as we make a copy of the current state
        // so the page can stay immutable
        const updatedComments = { ...comments };
        // Here we irerate over the results query with a "for... of" loop.
        for (const result of results) {
          // it then adds the new comment to a JSON and ties it to the post
          updatedComments[result.id] = result.toJSON();
          // for debugging, consoles all the comments
          console.log("COMMENTS " + result.id);
        }
        // updates the state with the new comment
        setComments(updatedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
    // Calling the function because returning a Promise from useEffect is not allowed
    fetchComments();
    // postId, numberOfComments it the list of dependencies and the effect should re-run when these two change values.
  }, [postId, numberOfComments]);

  // We don't need the useEffect here, as this is an Event Handler
  // It takes the parameters factor and commentId, which is the current comments you want to like.
  async function changeSipCount(factor, commentId) {
    // javaScript [] bracket notation to access the comment objevt from the comments object
    // we are also fetching the id of the comment we want
    const commentToUpdate = comments[commentId];
    // here we take the factor parameter and either increment or decrement it
    // this could be simplified, just by using the "factor"
    commentToUpdate.sips += 1 * factor;
    // create a new sip const with the updated sips value to update the backend
    const sips = commentToUpdate.sips;
    // create a const that awaits the Promise by the async function
    // call to fetchComment(commentId), fetches a specific comment's data from the Parse server, based on the provided commentId.
    // stores the commentID
    const dbComment = await fetchComment(commentId);
    // then sets the attribute "sips" to the new value of sips
    dbComment.set("sips", sips);
    // saves the dbComment with the new sip count
    dbComment.save();
    // attaches the comment toUpdate ti an array
    // The spread operator is used to copy existing comments, and the updated comment is added
    const updatedComments = {
      ...comments,
      [commentId]: commentToUpdate,
    };
    // changes the state of the comment
    setComments(updatedComments);
  }

  // Uses functions from the commentRepository to add or delete a commentLike from the database
  // See 'src/repositories' folder

  // here we create the event handler for the handle sips
  // it takes the parameters userId and commentId to update the these in the backend
  const handleSipOnComment = async (userId, commentId) => {
    // used for bebugging to see it if works
    console.log("handleSipOnComment called");
    // create a variable to hold a specific comment by using its id
    const commentToUpdate = comments[commentId];
    try {
      // it sees if a comment is liked already by checking if the user has liked it before
      // this method if defined in the comment rep.
      const check = await checkIfCommentLiked(userId, commentId);
      if (check) {
        // it check is true, then it will delete the comment, and the changeSipCount is invoked
        deleteCommentLike(userId, commentId);
        changeSipCount(-1, commentId);
        // then the state of the commentToUpdate it changed to false.
        commentToUpdate.isSipped = false;
      } else {
        // else we add the comment like, and the changeSipCount is invoked and adds another like
        addCommentLike(userId, commentId);
        changeSipCount(1, commentId);
        // here the state is changed to true
        commentToUpdate.isSipped = true;
      }
    } catch (error) {
      console.error("Error handling sip on comment:", error);
    }
  };

  return (
    // container element for the comments
    <div className="comment-section-content">
      {/* The CommentSection parent is iterating over the comments.
      For each comment in this object we render a Comment component, and the there is several properties passes to the Comment component.
      E.g. postedBy etc. 
      This allows the Comment component to display specific information about the comment it represents, 
      and handle user interactions */}
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
