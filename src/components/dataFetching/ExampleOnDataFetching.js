import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExampleOnDataFetching() {
  const [posts, setPost] = useState([]);
  const [inputPost, setInputPost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${inputPost}`)
      .then((response) => {
        console.log(response);
        setPost([response.data]);
      });
  };

  useEffect(() => {
    console.log("useffect");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("printing the response", response);
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      Input:
      <input
        type="text"
        value={inputPost}
        onChange={(e) => setInputPost(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}> {post.title} </li>;
        })}
      </ul>
    </div>
  );
}
