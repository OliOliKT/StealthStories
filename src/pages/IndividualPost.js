import React, { useState } from "react";
import Parse from 'parse';
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
  const { postTitle, mood, postedBy, postContent, numberOfComments, sipCount } = location.state || {};
  const [commentCount, setCommentCount] =useState(numberOfComments);
  const [isCommenting, setIsCommenting] = useState(false);
  const [numberOfCommentsAdded, setNumberOfCommentsAdded] = useState(0);


  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };

  // const handleComment = async () => {
  //   try {
  //     const Comment = Parse.Object.extend("Comment");
  //     const query = new Parse.Query(Comment);
  //     query.equalTo("postIdString", postId);
  //     query.count()
  //       .then((count) => {
  //         setCommentCount(count)
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching comment count:", error);
  //       });
  //   } catch (error) {
  //     console.error("Error incrementing comment count:", error);
  //   }
  // };

  const handleCommentPosted = () => {
    setIsCommenting(false);
    setNumberOfCommentsAdded(numberOfCommentsAdded+1)
    //handleComment();
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
