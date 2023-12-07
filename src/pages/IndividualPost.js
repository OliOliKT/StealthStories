import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';

import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import WriteComment from "../components/CommentComponent"; 
import CommentSection from "../components/CommentSection";
import AddCommentButton from "../components/AddCommentButton";
import "./IndividualPost.css";

function IndividualPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { postTitle, mood, postedBy, postContent, numberOfComments, sipCount } = location.state || {};
  const [isCommenting, setIsCommenting] = useState(false);
  const [numberOfCommentsAdded, setNumberOfCommentsAdded] = useState(0);

  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };
  const handleCommentPosted = () => {
    setIsCommenting(false);
    setNumberOfCommentsAdded(numberOfCommentsAdded+1)
  };

  const handleCommentModalClose = () => {
    setIsCommenting(false);
  };

  useEffect(() => {
    if (isCommenting) {
      document.getElementById('comment').scrollIntoView({ behavior: 'smooth' });
    }
  }, [isCommenting]);
  
  return (
    <>
    <div className="individual-post-page-content">
      <TopBar />
      {location.state ? (
        <Post id="individual-post-view"
          postTitle={postTitle}
          mood={mood}
          postedBy={postedBy}
          postContent={postContent}
          postId={postId}
          numberOfComments={numberOfComments}
          sipCount={sipCount}
        />
      ) : (
        <p>Post not found</p>
      )}
      <CommentSection postId={postId} numberOfComments={numberOfCommentsAdded} />
      <AddCommentButton onAddCommentClick={handleAddCommentClick} />
      {isCommenting && (
        <WriteComment
          postId={postId}
          closeCommentModal={handleCommentModalClose}
          onCommentPosted={handleCommentPosted}
        />
      )}
      
    </div>
    <Footer />
    </>
  );
}

export default IndividualPost;
