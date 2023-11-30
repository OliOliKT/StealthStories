import React, { useState } from "react";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import WriteComment from "../components/CommentComponent"; // Assuming this is your updated Comment component
import "./IndividualPost.css";
import { useParams, useLocation } from 'react-router-dom'; 
import CommentSection from "../components/CommentSection";
import AddCommentButton from "../components/AddCommentButton";
import { useEffect } from "react";

function IndividualPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { postTitle, mood, postedBy, postContent } = location.state || {};
  const [isCommenting, setIsCommenting] = useState(false);

  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };
  const handleCommentPosted = () => {
    setIsCommenting(false);
    // Here, you would likely want to refresh the comments section
    // or append the new comment to the current list of comments.
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
    <div className="individual-post-page-content">
      <TopBar />
      {location.state ? (
        <Post id="individual-post-view"
          postTitle={postTitle}
          mood={mood}
          postedBy={postedBy}
          postContent={postContent}
          postId={postId}
        />
      ) : (
        <p>Post not found</p>
      )}
      <CommentSection postId={postId} />
      <AddCommentButton onAddCommentClick={handleAddCommentClick} />
      {isCommenting && (
        <WriteComment
          postId={postId}
          closeCommentModal={handleCommentModalClose}
          onCommentPosted={handleCommentPosted}
        />
      )}
      <Footer />
    </div>
  );
}

export default IndividualPost;
