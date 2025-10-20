import { useContext, useEffect, useState } from "react";
import { userContext } from "../hooks/UserContext";

function Posts() {
  const { getAllPosts, fetchingPosts } = useContext(userContext);
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetch() {
      const posts = await getAllPosts();
      setAllPosts(posts);
    }
    fetch()
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {fetchingPosts ? (
        <p>Fetching Posts...</p>
      ) : allPosts.length === 0 ? (
        <p>No post found</p>
      ) : (
        allPosts.map((post, index) => (
          <div className="" key={index}>
            <h2>Title: {post.title}</h2>
            <p>Description: {post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
