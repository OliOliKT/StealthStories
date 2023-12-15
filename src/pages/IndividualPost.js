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
import fetchPost from "../repositories/postRepository";

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
  }, []);

  const handleAddCommentClick = () => {
    console.log('Add comment clicked'); 
    setIsCommenting(true);
  };

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
