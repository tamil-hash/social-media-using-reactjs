import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Stories from "./components/Stories";
import Contacts from "./components/Contacts";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostData from "./components/PostData";

const getLocalStorage = () => {
  const postsFromLS = localStorage.getItem("posts");
  if (postsFromLS) {
    return JSON.parse(postsFromLS);
  } else {
    return PostData;
  }
};

function App() {
  const [users, setUsers] = useState([]);
  const [isNavBarActive, setIsNavBarActive] = useState(false);
  const [posts, setPosts] = useState(getLocalStorage());

  //getting and setting Users from random users API

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();

    const newUsers = data.results.map(({ name, picture }) => {
      const random = Math.random() < 0.5;

      return {
        name: `${name.first} ${name.last}`,
        picture: picture.large,
        isActive: random,
      };
    });

    setUsers(newUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavBar
        users={users}
        isNavBarActive={isNavBarActive}
        setIsNavBarActive={setIsNavBarActive}
      />
      <main className="home">
        <Stories />
        <CreatePost posts={posts} setPosts={setPosts} />
        <Contacts users={users} addClass={"contact-list hide"} />
        <section className="posts">
          {posts.map((post, index) => (
            <Post
              key={post.id}
              index={index}
              posts={posts}
              {...post}
              setPosts={setPosts}
            />
          ))}
        </section>
      </main>
    </>
  );
}
export default App;
