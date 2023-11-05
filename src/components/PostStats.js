import React from "react";
import './PostStats.css';

function PostStats() {
    return (
        <>
            <Title/>
            <div id="stats">
                <div id="stat-1" className="stat-box">
                    <p>Total posts</p>
                    <p>24</p>
                </div>
                <div id="stat-2" className="stat-box">
                    <p>Total comments</p>
                    <p>187</p>
                </div>
                <div id="stat-3" className="stat-box">
                    <p>Total sips given</p>
                    <p>544</p>
                </div>
                <div id="stat-4" className="stat-box">
                    <p>Total sips recieved</p>
                    <p>1034</p>
                </div>
            </div>
        </>
    );
}

function Title() {
    return <h1 id="your-post-title">My posts</h1>;
}

export default PostStats;