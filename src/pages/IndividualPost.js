import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Post from "../components/Post";
import WriteComment from "../components/WriteComment"; 
import CommentSection from "../components/CommentSection";
import Parse from 'parse';
import {fetchPost} from "../repositories/postRepository";
import "./IndividualPost.css";

function IndividualPost() {
  const { postId } = useParams();
  
  const [postTitle, setPostTitle] = useState("");
  const [postedBy, setpostedBy] = useState("");
  const [mood, setmood] = useState("");
  const [postContent, setPostContent] = useState("");
  const [numberOfComments2, setNumberOfComments] = useState(0);
  const [sipCount, setsipCount] = useState(0);
  const [isCommenting, setIsCommenting] = useState(false);

  /* Fetches the post with the given id from the data, on each render */
  useEffect(() => {
    const getPostData = async () => {
      try {
        const postData = await fetchPost(postId);
        console.log(postData);
        setPostTitle(postData.postTitle); 
        setpostedBy(postData.userId);
        setmood(postData.mood);
        setPostContent(postData.postContent);
        setNumberOfComments(postData.comments);
        setsipCount(postData.sips);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    getPostData();
  });

  /* When the 'add  comment' button is clicked, a component will appear at the bottom of the page */
  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };

  /* Updats the comment count for the post object in the database */
  const fetchCommentCount = async() =>  {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const post = await query.get(postId);
    const updatedNumberOfComments = post.get('comments');
    setNumberOfComments(updatedNumberOfComments);
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
      {postTitle ? (
        <Post id="individual-post-view"
          postTitle={postTitle}
          mood={mood}
          postedBy={postedBy}
          postContent={postContent} 
          postId={postId}
          numberOfComments={numberOfComments2}
          sipCount={sipCount}
          commentClickCallback={() => handleAddCommentClick(postId)}
        />
      ) : (
        <p>Post not found</p>
      )}
      <CommentSection postId={postId} numberOfComments={numberOfComments2} />

      <div className="add-comment-button-container">
        <button className="add-comment-button" onClick={handleAddCommentClick}>
            <p className="add-comment-text">+ Add Comment</p>
        </button>
      </div>

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
