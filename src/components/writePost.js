import React, { useState } from "react";
import "./writePost.css";
import Parse from "parse";

const WritePost = () => {

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleSendPost = async () => {
    const Post = Parse.Object.extend("Post");
    const newPost = new Post();
  
    newPost.set("postContent", post);
    newPost.set("postTitle", title);
  
    try {
      await newPost.save();
      console.log("Post saved successfully!");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <section className="writePost">
      <PostBox setTitle={setTitle} setPost={setPost} handleSendPost={handleSendPost} />
    </section>
  );

};

const PostBox = ({ setTitle, setPost, handleSendPost }) => {
  return (
    <div>
      <textarea
        id="title"
        placeholder="Your title..."
        rows="5"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        id="post"
        placeholder="Your post..."
        rows="5"
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <PostBorder handleSendPost={handleSendPost} />
    </div>
  );
};

const PostBorder = ({ handleSendPost }) => {
  return (
    <div className="postBorder">
      <PostIcons />
      <SendPostIcon handleSendPost={handleSendPost} />
    </div>
  );
};

const PostIcons = () => {
  return (
    <div className="postIcons">
      <i className="fa-solid fa-image"></i>
      <i className="fa-solid fa-rainbow"></i>
    </div>
  );
};

const SendPostIcon = ({ handleSendPost }) => {
  return (
    <div className="postPost" onClick={handleSendPost}>
      <i className="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WritePost;
