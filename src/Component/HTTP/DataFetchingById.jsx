import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingById = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
    </div>
  );
};

export default DataFetchingById;
