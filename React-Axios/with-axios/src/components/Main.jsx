import "./style.css";
import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Main() {
  const [posts, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <div>
      <ul>
        {posts.map(function (post, index) {
          return (
            <li key={index}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
