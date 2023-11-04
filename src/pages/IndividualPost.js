import React from "react";
import TopBar from "../components/topBarComponent";
import Footer from "../components/footer";
import Post from "../components/Post";
import CommentComponent from "../components/CommentComponent";
import UserComment from "../components/UserCommentsComponent";
import "./IndividualPost.css";

function IndividualPost() {
  return (
    <div className="main-content">
      <TopBar />
      <Post />
      <CommentComponent />
      <UserComment />
      <Footer />
    </div>
  );
}

export default IndividualPost;
