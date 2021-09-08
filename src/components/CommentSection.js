import { useState, useEffect } from "react";
import UserLogo from "./images/user-logo.jpg";

const CommentSection = ({ posts, setPosts, comments, userId, index }) => {
  // const getComments = () => {
  //   if (comments.length !== 0) {
  //     return comments;
  //   } else {
  //     return [];
  //   }
  // };

  const [commentInput, setCommentInput] = useState("");
  const [allComments, setAllComments] = useState(comments);

  const addComment = (e) => {
    e.preventDefault();
    if (commentInput !== "") {
      const newComment = {
        com_id: new Date().getTime().toString(),
        user: "Tamilselvan",
        img: UserLogo,
        comment: commentInput,
      };
      setAllComments([newComment, ...allComments]);

      var editedUser = posts[index];
      editedUser.comments = allComments;
      const newPosts = posts.map((post) => {
        if (post.id === userId) {
          return editedUser;
        } else {
          return post;
        }
      });
      setPosts(newPosts);
      setCommentInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="comments-section">
      <form action="" onSubmit={(e) => addComment(e)}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments">
        {allComments.map(({ com_id, user, img, comment }) => (
          <div key={com_id} className="single-comment">
            <div className="cmt-user-img ">
              <img className="logo" src={img} alt="user-logo" />
            </div>
            <div className="text">
              <h4>{user}</h4>
              <p>{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
