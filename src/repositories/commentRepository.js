import Parse from "parse";

const fetchComment = async (commentId) => {
  const Comment = Parse.Object.extend("Comment");
  const query = new Parse.Query(Comment);
  const comment = await query.get(commentId);
  return comment;
};

// Function for ADDING a row in the CommentLikes class in the database
const addCommentLike = async (userId, commentId) => {
  const CommentLike = Parse.Object.extend("CommentLikes");
  const commentLike = new CommentLike();

  commentLike.set("userId", userId);
  commentLike.set("commentId", commentId);

  commentLike
    .save()
    .then((result) => {
      console.log("CommentLike successfully saved to the database");
    })
    .catch((error) => {
      console.log(
        "Something went wrong when saving the CommentLIke to the database"
      );
    });
};

// Function for REMOVING a row in the CommentLikes class in the database
const deleteCommentLike = async (userId, commentId) => {
  const query = new Parse.Query("CommentLikes");

  query.equalTo("userId", userId);
  query.equalTo("commentId", commentId);

  try {
    const result = await query.find();
    if (result.length > 0) {
      const likeToDelete = result[0];
      await likeToDelete.destroy();
      console.log("CommentLike successfully deleted from the database");
    } else {
      console.log("No matching CommentLike found to delete");
    }
  } catch (error) {
    console.log("Error while deleting CommentLike:", error);
  }
};

// Check if a comment has already been liked by a specific user - returns true if liked, false if not liked
const checkIfCommentLiked = async (userId, commentId) => {
    const CommentLike = Parse.Object.extend("CommentLikes");
    const query = new Parse.Query(CommentLike);
  
    query.equalTo("userId", userId);
    query.equalTo("commentId", commentId);
  
    try {
      const result = await query.first();
      if (result) {
        console.log("User have liked this comment before");
        return true;
      } else {
        console.log("User have NOT liked this comment before");
        return false;
      }
    } catch (error) {
      console.error("Error checking if user liked comment:", error);
      return false;
    }
  };
  

export { fetchComment, addCommentLike, checkIfCommentLiked, deleteCommentLike };
