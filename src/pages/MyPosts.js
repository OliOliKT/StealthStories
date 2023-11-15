import React from 'react';
import "./MyPosts.css";

import PostStats from "../components/PostStats";
import Title from "../components/MyPostsTitle";
import PostFilter from "../components/PostFilter";
import Feed from "../components/Feed";
import TopBarComponent from "../components/topBarComponent";
import Footer from "../components/footer";
import UserSettingsSidebar from '../components/UserSettingsSidebar';

function MyPosts() {
    return (
        <>
            <TopBarComponent/>
            <UserSettingsSidebar/>
            <div className="MyPosts">
            <Title/>
                <PostStats/>
                <PostFilter/>
                <Feed/>
                <Footer/>
            </div>
        </>
    );
}

export default MyPosts;