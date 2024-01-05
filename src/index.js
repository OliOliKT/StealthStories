import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DiscoverFeed from "./pages/DiscoverFeed";
import TrendingFeed from "./pages/TrendingFeed";
import MyPosts from "./pages/MyPosts";
import IndividualPost from "./pages/IndividualPost";
import UserSettings from "./pages/UserSettings";
import LogIn from "./pages/LogIn";
import Parse from "parse";
import CreateUser from "./pages/CreateUser";
import AboutUs from "./pages/AboutUs";
import PrivacyAndSafety from "./pages/PrivacyAndSafety";
import ContactUs from "./pages/ContactUs";
import ChangePassword from "./pages/ChangePassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/DiscoverFeed" element={<DiscoverFeed />} />
        <Route path="/UserSettings" element={<UserSettings />} />
        <Route path="/TrendingFeed" element={<TrendingFeed />} />
        <Route path="/MyPosts" element={<MyPosts />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PrivacyAndSafety" element={<PrivacyAndSafety />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/posts/:postId" element={<IndividualPost />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

const PARSE_APPLICATION_ID = "es6CJLrc9LYRJMMRhUwn9ieWU4usoyetaZapmKFN";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "LMrCwVYAp4C1jt5zdXdFWuw5ANX6rlOZuERWHjvH";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

reportWebVitals();
