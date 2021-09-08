import { useState } from "react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import CommentSection from "./CommentSection";

const Posts = ({
  id,
  user,
  cap,
  img,
  interaction,
  comments,
  posts,
  setPosts,
  index,
}) => {
  const [isLiked, setIsLiked] = useState({
    NoOfLikes: interaction.like,
    style: false,
  });

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  // liking post

  const likePost = () => {
    if (isLiked.style) {
      setIsLiked({ NoOfLikes: --interaction.like, style: false });
    } else {
      setIsLiked({ NoOfLikes: ++interaction.like, style: true });
    }
  };

  return (
    <div className="single-post">
      <div className="post-head">
        <img className="logo" src={user.img} alt="user-logo" />
        <h4>{user.name}</h4>
      </div>

      <p className="caption">{cap}</p>
      <div className="post-img">
        <img src={img} alt="" />
      </div>
      <div className="interactions-got">
        <div className="likes-got">
          <p>{isLiked.NoOfLikes} Likes</p>
        </div>
        <div className="comments-shares-got">
          <p>{comments.length} comments</p>
          <p>{interaction.share} shares</p>
        </div>
      </div>
      <hr />
      <div className="interaction">
        <div
          className={`inter like ${isLiked.style && "liked"}`}
          onClick={() => likePost()}
        >
          <AiFillLike className="like-icon" />
          <p>Like</p>
        </div>
        <div
          className="inter comment"
          onClick={() => setIsCommentOpen(!isCommentOpen)}
        >
          <AiOutlineComment className="comment-icon" />
          <p>Comment</p>
        </div>
        <div className="inter share">
          <IoMdShareAlt className="share-icon" />
          <p>Share</p>
        </div>
      </div>
      <hr />
      {isCommentOpen && (
        <CommentSection
          comments={comments}
          posts={posts}
          setPosts={setPosts}
          userId={id}
          index={index}
        />
      )}
    </div>
  );
};

export default Posts;
