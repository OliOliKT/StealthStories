import Parse from "parse";

const fetchPost = async (postId) => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  const post = await query.get(postId);
  return post.toJSON();
};


const checkIfUserLikedPost = async (postId, userId) => {
  const Likes = Parse.Object.extend("Likes");
  const query = new Parse.Query(Likes);

  query.equalTo("postId", postId);
  query.equalTo("userId", userId);

  try {
    const result = await query.first();
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking if user liked post:", error);
    throw error;
  }
};

export { fetchPost, checkIfUserLikedPost };
