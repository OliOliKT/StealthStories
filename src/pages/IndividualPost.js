import React from "react";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import CommentComponent from "../components/CommentComponent";
import UserComment from "../components/UserCommentsComponent";
import "./IndividualPost.css";
import { useParams } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom'; // Import useLocation



function IndividualPost() {
  const location = useLocation();
  const { postTitle, mood, postedBy, postContent, postId } = location.state || {};
  return (
    <div>
      <TopBar />
      {location.state ? (
        <Post
          postTitle={postTitle}
          mood={mood}
          postedBy={postedBy}
          postContent={postContent}
          postId={postId}
        />
      ) : (
        <p>Post not found</p> // Or some error handling
      )}
      <CommentComponent postId={postId} />
      <UserComment postId={postId} />
      <Footer />
    </div>
  );
}

export default IndividualPost;
