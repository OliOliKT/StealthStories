import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DiscoverFeed from "./pages/DiscoverFeed";
import TrendingFeed from "./pages/TrendingFeed";
import MyPosts from "./pages/MyPosts";
import IndividualPost from "./pages/IndividualPost";
import UserSettings from "./pages/UserSettings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DiscoverFeed/>} />
        <Route path="/UserSettings" element={<UserSettings/>} />
        <Route path="/TrendingFeed" element={<TrendingFeed/>} />
        <Route path="/MyPosts" element={<MyPosts/>} />
        <Route path="/IndividualPost" element={<IndividualPost/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
