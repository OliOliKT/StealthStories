// Only one import statement is necessary for React and useState
import React, { useState } from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';
import WriteComment from './CommentComponent';
import { useNavigate } from 'react-router-dom'; // Import useHistory

function Post({ postTitle, mood, postedBy, postContent, postId}) {
  const [likeCount, setLikeCount] = useState(0); // this needs to be fetched from database!!
  const [commentCount, setCommentCount] = useState(0); // this needs to be fetched from database!!
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const navigate = useNavigate();




  const handleCommentIconClick = () => {
    navigate(`/posts/${postId}`, { state: { postTitle, mood, postedBy, postContent, postId } });
  };
  // increment like or comment counter (subject to change). Needs to be set up with database!
  const handleLike = async () => {
    const newLikeStatus = !isLiked; 
    setIsLiked(newLikeStatus);
    setLikeCount(likeCount + (newLikeStatus ? 1 : -1)); // Increment or decrement the like count
   
  };
  const handleComment = async () => {
    setCommentCount(commentCount + 1); // same for comments
  };

  return (
    <div className="IndividualPost">
      <div className="BlockPostContent">
        <div className="textPartOfPost">
          <div className="avatar-area">
            <i className="fas fa-user-circle"></i>
            <div className="post-meta-data">
              <h2>
                {postTitle} <em className="mood">{mood}</em>
              </h2>
              <p className="posted-by">Posted by {postedBy}</p>
            </div>
          </div>
          <p className="post-content">{postContent}</p>
        </div>
      </div>

      <div className="bottomPartOfPost">
        <div id="backgroundOnActionBar">
          <div className="actionBarOnPost">
            <LikeButtonAndText likeCount={likeCount} onLike={handleLike} isLiked={isLiked} />
            <CommentButtonAndText commentCount={commentCount} onComment={handleCommentIconClick} />
            <BellButtonAndText />
          </div>
        </div>
      </div>

      {/* Comment modal */}
      {isCommentModalOpen && (
        <WriteComment
          postId={postId}
          closeCommentModal={() => setIsCommentModalOpen(false)}
          onCommentPosted={handleComment}
        />
      )}
    </div>
  );
}

export default Post;
