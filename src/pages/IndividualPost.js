import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Post from "../components/Post";
import WriteComment from "../components/WriteComment";
import CommentSection from "../components/CommentSection";
import Parse from "parse";
import { fetchPost } from "../repositories/PostRepository";
import "./IndividualPost.css";

function IndividualPost() {
  const { postId } = useParams();
  const [postTitle, setPostTitle] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [mood, setMood] = useState("");
  const [postContent, setPostContent] = useState("");
  const [numberOfComments, setCommentCount] = useState(0);
  const [sipCount, setSipCount] = useState(0);
  const [isCommenting, setIsCommenting] = useState(false);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const postData = await fetchPost(postId);
        console.log(postData);
        setPostTitle(postData.postTitle);
        setPostedBy(postData.userId);
        setMood(postData.mood);
        setPostContent(postData.postContent);
        setCommentCount(postData.comments);
        setSipCount(postData.sips);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPostData();
  });

  const handleAddCommentClick = () => {
    console.log("Add comment clicked");
    setIsCommenting(true);
  };

  const fetchCommentCount = async () => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const post = await query.get(postId);
    const updatedCommentCount = post.get("comments");
    setCommentCount(updatedCommentCount);
  };

  const handleCommentPosted = () => {
    setIsCommenting(false);
    fetchCommentCount();
  };

  useEffect(() => {
    if (isCommenting) {
      document.getElementById("comment").scrollIntoView({ behavior: "smooth" });
    }
  }, [isCommenting]);

  return (
    <>
      <div className="individual-post-page-content">
        <TopBar />
        {postTitle ? (
          <Post
            id="individual-post-view"
            postTitle={postTitle}
            mood={mood}
            postedBy={postedBy}
            postContent={postContent}
            postId={postId}
            numberOfComments={numberOfComments}
            sipCount={sipCount}
            individualPostClickCallback={() => handleAddCommentClick(postId)}
          />
        ) : (
          <p>Post not found</p>
        )}
        <CommentSection postId={postId} numberOfComments={numberOfComments} />

        <div className="add-comment-button-container">
          <button
            className="add-comment-button"
            onClick={handleAddCommentClick}
          >
            <p className="add-comment-text">+ Add Comment</p>
          </button>
        </div>

        {isCommenting && (
          <WriteComment
            postId={postId}
            onCommentPosted={handleCommentPosted}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default IndividualPost;
