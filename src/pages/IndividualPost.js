import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';

import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import WriteComment from "../components/CommentComponent"; 
import CommentSection from "../components/CommentSection";
import AddCommentButton from "../components/AddCommentButton";
import "./IndividualPost.css";
import Parse from 'parse';
import PostFilter from '../components/MyPostsFilter';
function IndividualPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { postTitle, mood, postedBy, postContent, numberOfComments, sipCount } = location.state || {};
  const [isCommenting, setIsCommenting] = useState(false);

  const [numberOfComments2, setNumberOfComments] = useState(numberOfComments);

  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };

  const fetchCommentCount = async() =>  {
    
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const post = await query.get(postId);
    console.log(numberOfComments);
  
    console.log(postId);
    setNumberOfComments(post.toJSON().comments)
  }

  const handleCommentPosted = () => {
    setIsCommenting(false);
    fetchCommentCount();
  };

  const handleCommentModalClose = () => {
    setIsCommenting(false);
  };

  /* When the bool isCommenting is true (meaning that the 'add comment' button has been clicked), scoll down and show the writeComment component */
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
          numberOfComments={numberOfComments2}
          sipCount={sipCount}
        />
      ) : (
        <p>Post not found</p>
      )}
      <CommentSection postId={postId} numberOfComments={numberOfComments} />
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
