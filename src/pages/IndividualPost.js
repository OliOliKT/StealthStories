import React from "react";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import CommentComponent from "../components/CommentComponent";
import UserComment from "../components/UserCommentsComponent";
import "./IndividualPost.css";
import { useParams } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import CommentSection from "../components/CommentSection";
import AddCommentButton from "../components/AddCommentButton";


function IndividualPost() {
  const { postId } = useParams();
  const location = useLocation();
  const { postTitle, mood, postedBy, postContent } = location.state || {};
  return (
    <div className ="individual-post-page-content">
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
        <p>Post not found</p> // or some non-awful error handling :)
      )}
      <CommentComponent postId={postId} />
      <AddCommentButton />
      <CommentSection />
      <Footer/>
    </div>
  );
}

export default IndividualPost;
