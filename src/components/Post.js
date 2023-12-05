import Parse from 'parse';
import React, { useState } from "react";
import LikeButtonAndText from './LikeButtonAndText';
import CommentButtonAndText from './CommentButtonAndText';
import BellButtonAndText from './BellButtonAndText';
import './Post.css';
import { useNavigate } from 'react-router-dom';

function Post({ postTitle, mood, postedBy, postContent, postId, sipCount, numberOfComments }) {
  const [isSipped, setIsSipped] = useState(false);
  const [updatedSipCount, setUpdatedSipCount] = useState(sipCount);

  const [commentCount, setCommentCount] = useState(numberOfComments);

  const navigate = useNavigate();


  const handleCommentIconClick = () => {
    navigate(`/posts/${postId}`, { state: { postTitle, mood, postedBy, postContent, postId, numberOfComments, sipCount } });
  };

  const handleComment = async () => {
    try {
      const Comment = Parse.Object.extend("Comment");
      const query = new Parse.Query(Comment);
      query.equalTo("postIdString", postId);
      query.count()
        .then((count) => {
          setCommentCount(count)
        })
        .catch((error) => {
          console.error("Error fetching comment count:", error);
        });
    } catch (error) {
      console.error("Error incrementing comment count:", error);
    }
  };

  const handleSip = async () => {
    try {
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      const post = await query.get(postId);
      if (isSipped) {
        post.decrement("sips");
        setUpdatedSipCount(updatedSipCount - 1);
        setIsSipped(false);
      } else {
        post.increment("sips");
        setUpdatedSipCount(updatedSipCount + 1);
        setIsSipped(true);
      }
      await post.save();

    } catch (error) {
      console.error("Error incrementing sips:", error);
    }
  };

  return (
    <div className="IndividualPost">
      <div className="BlockPostContent">
        <div className="textPartOfPost">
          <div className="avatar-area">
            <i className="fas fa-user-circle"></i>
            <div className="post-meta-data">
              <h2>
                {postTitle} - <em className="mood">feeling {mood}</em>
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
            <LikeButtonAndText sipCount={updatedSipCount} onSip={handleSip} isSipped={isSipped} />
            <CommentButtonAndText onComment={handleCommentIconClick} commentCount={commentCount} />
            <BellButtonAndText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
