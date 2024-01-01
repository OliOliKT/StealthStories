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

// parent component
function IndividualPost() {
  /* useParams is a react hook that is used for handling routing
  it is necessary for the IndividualPost component to know which post to fetch and display,
  even after navigation has occurred, because useParams provides the component with the dynamic part of the URL
  (the postId) that tells the component which post it should load and render on the page. */
  const { postId } = useParams();
  const [postTitle, setPostTitle] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [mood, setMood] = useState("");
  const [postContent, setPostContent] = useState("");
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [sipCount, setSipCount] = useState(0);
  // by setting "isCommenting" to false, the WriteComment component is initially closed
  const [isCommenting, setIsCommenting] = useState(false);

  // useEffect because we fetch data from the backend by using the fetchPost function
  useEffect(() => {
    // async function as we need the page to be responsive meanwhile we fetch the data
    const getPostData = async () => {
      try {
        const postData = await fetchPost(postId);
        console.log(postData);
        setPostTitle(postData.postTitle);
        setPostedBy(postData.userId);
        setMood(postData.mood);
        setPostContent(postData.postContent);
        setNumberOfComments(postData.comments);
        setSipCount(postData.sips);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPostData();
    // usally we would have a dependency array here, but as the state won't change we don't need it
    // normally it would be good practice to have an empty one
  });

  // this is triggered when the user wants to write a comment
  // it sets the "setIsCommenting" to true, and therefore is responsible for displaying the component
  const handleAddCommentClick = () => {
    console.log("Add comment clicked");
    setIsCommenting(true);
  };

  // fetches the number of comments for the specific post
  const fetchCommentCount = async () => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const post = await query.get(postId);
    const updatedNumberOfComments = post.get("comments");
    setNumberOfComments(updatedNumberOfComments);
  };

  // here it sets the "setIsCommenting" to false again, which means the WriteComment component is not displayed anymore
  const handleCommentPosted = () => {
    setIsCommenting(false); // this is redundant becuse we call HandleCommentClear in the function inside WriteComment which also sets isCommenting state to false
    fetchCommentCount();
  };

  // Also sets isCommenting to false, used to hide the WriteComment component without posting a comment (e.g., if the user decides to cancel commenting)
  const handleCommentClear = () => {
    setIsCommenting(false);
  };

  // scroll down to the WritePost component
  useEffect(() => {
    if (isCommenting) {
      document.getElementById("comment").scrollIntoView({ behavior: "smooth" });
    }
  }, [isCommenting]);

  return (
    <>
      <div className="individual-post-page-content">
        <TopBar />
        {/* Ternary operator - truthy check */}
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
            commentClickCallback={() => handleAddCommentClick(postId)}
          />
        ) : (
          <p>Post not found</p>
        )}
        {/* Fetches comment section of the specific post */}
        <CommentSection postId={postId} numberOfComments={numberOfComments} />

        <div className="add-comment-button-container">
          <button
            className="add-comment-button"
            // when handleAddCommentClick is invoked, isCommenting becomes true
            // and then rerenders the IndividualPost component with the WriteComment
            onClick={handleAddCommentClick}
          >
            <p className="add-comment-text">+ Add Comment</p>
          </button>
        </div>
        {/* if isCommenting is true, then render the WriteComment component
           it is passed postId, clearCommentForm */}
        {isCommenting && (
          <WriteComment
            postId={postId}
            clearCommentForm={handleCommentClear}
            onCommentPosted={handleCommentPosted}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default IndividualPost;
