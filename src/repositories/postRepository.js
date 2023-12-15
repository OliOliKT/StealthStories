import React from "react";
import Parse from 'parse';

const fetchPost = async (postId) => { 
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const post = await query.get(postId);
    return post.toJSON();
}
export default fetchPost;