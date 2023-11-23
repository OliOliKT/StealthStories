import React, { useState, useEffect } from "react";
import "./writePost.css";
import Parse from "parse";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [userId, setUserId] = useState("unknown user");
  const [mood, setMood] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const currentUser = Parse.User.current();
        if (currentUser) {
          const sessionQuery = new Parse.Query(Parse.Session);
          sessionQuery.equalTo("user", currentUser);
          const session = await sessionQuery.first();
          if (session) {
            const userObjectId = session.get("user").id;
            const userQuery = new Parse.Query(Parse.User);
            userQuery.equalTo("objectId", userObjectId);
            const user = await userQuery.first();
            if (user) {
              const username = user.get("username");
              setUserId(username);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const handleSendPost = async () => {
    const Post = Parse.Object.extend("Post");
    const newPost = new Post();

    newPost.set("postContent", post);
    newPost.set("postTitle", title);
    newPost.set("userId", userId);
    newPost.set("mood", mood);

    try {
      await newPost.save();
      console.log("Post saved successfully!");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <section className="writePost">
      <PostBox 
        setTitle={setTitle} 
        setPost={setPost} 
        handleSendPost={handleSendPost} 
        setMood={setMood} // Pass setMood function
      />
    </section>
  );
};

const PostBox = ({ setTitle, setPost, handleSendPost, setMood }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSendPost();
    }
  };  return (
    <div>
      <textarea
        id="title"
        placeholder="Your title..."
        rows="5"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <div id="moods">
        <label htmlFor="mood-filter">Mood: </label>
        <select id="mood-filter" name="mood-filter-list" onChange={(e) => setMood(e.target.value)}>
            <option value="happy">Happy</option>
            <option value="cheeky">Cheeky</option>
            <option value="sad">Sad</option>
            <option value="cheerful">Cheerful</option>
            <option value="excited">Excited</option>
            <option value="envious">Envious</option>
            <option value="angry">Angry</option>
            <option value="outraged">Outraged</option>
            <option value="disappointed">Disappointed</option>
            <option value="surprised">Surprised</option>
        </select>
      </div>
      <textarea
        id="post"
        placeholder="Your post..."
        rows="5"
        onChange={(e) => setPost(e.target.value)}
        onKeyDown={handleKeyDown}
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
  const handleClick = () => {
    handleSendPost();

    document.getElementById("title").value = "";
    document.getElementById("post").value = "";
  };

  return (
    <div className="postPost" onClick={handleClick}>
      <i className="fa-solid fa-paper-plane"></i>
    </div>
  );
};

export default WritePost;
