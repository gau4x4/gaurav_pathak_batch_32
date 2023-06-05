import "./style.css";
import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Main() {
  const [posts, setPost] = React.useState(null);

  React.useEffect(() => {
    // axios.get(baseURL).then((response) => {
    //   setPost(response.data);
    // });
    const getPostsFromAPI = async function () {
      const dataFromAPI = await fetch(baseURL);
      const data = await dataFromAPI.json();
      setPost(data);
    };
    getPostsFromAPI();
  }, []);

  if (!posts) return null;
  const addDom = function () {
    return posts.map(function (post, index) {
      return (
        <li key={index}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </li>
      );
    });
  };
  return (
    <div>
      <ul>{addDom()}</ul>
    </div>
  );
}

export default Main;
