import { useState, useEffect } from "react";
import UserLogo from "./images/user-logo.jpg";

const CreatePost = ({ posts, setPosts }) => {
  const [captionInput, setCaptionInput] = useState("");
  const [imageLinkInput, setImageLinkInput] = useState("");

  //create post

  const postCreation = (e) => {
    e.preventDefault();
    if (captionInput !== "" && imageLinkInput !== "") {
      const newPost = {
        id: new Date().getTime().toString(),
        user: { name: "Tamilselvan", img: UserLogo },
        cap: captionInput,
        img: imageLinkInput,
        interaction: { like: 0, comment: 0, share: 0 },
        comments: [],
      };

      setPosts([newPost, ...posts]);
      setCaptionInput("");
      setImageLinkInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <section className="create-post">
      <img className="logo" src={UserLogo} alt="user-logo" />
      <form action="" onSubmit={(e) => postCreation(e)}>
        <input
          type="text"
          placeholder="What's on your mind, Tamil?"
          onChange={(e) => setCaptionInput(e.target.value)}
          value={captionInput}
        />
        <input
          type="url"
          placeholder="Place your Image link here..."
          onChange={(e) => setImageLinkInput(e.target.value)}
          value={imageLinkInput}
        />
        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
