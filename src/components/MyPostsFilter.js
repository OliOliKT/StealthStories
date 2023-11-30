import React from "react";
import './MyPostsFilter.css';

function PostFilter() {
    return (
        <div id="filter">
            <label for="post-filter">Filter by:</label>
            <select id="post-filter" name="post-filter-list" form="post-filter-form">
                <option value="oldest-to-newest">Oldest to newest</option>
                <option value="newest-to-oldest">Newest to oldest</option>
            </select>

            <label for="alias-filter">Alias:</label>
            <select id="alias-filter" name="alias-list" form="alias-form">
                <option value="all">All aliases</option>
                <option value="oli_oli_kt">oli_oli_kt</option>
                <option value="oli_ball">oli_ball</option>
            </select>
        </div>
    );
}

export default PostFilter;