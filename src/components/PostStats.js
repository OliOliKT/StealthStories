import React from "react";
import './PostStats.css';

function PostStats() {
    return (
        <>
            <div id="stats">
                <div id="stat-1" className="stat-box">
                    <p>Total posts</p>
                    <p>4</p>
                </div>
                <div id="stat-2" className="stat-box">
                    <p>Total comments</p>
                    <p>11</p>
                </div>
                <div id="stat-3" className="stat-box">
                    <p>Total sips given</p>
                    <p>17</p>
                </div>
                <div id="stat-4" className="stat-box">
                    <p>Total sips recieved</p>
                    <p>56</p>
                </div>
            </div>
        </>
    );
}

export default PostStats;