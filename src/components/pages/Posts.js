import { Grid, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Posts.css";

import MUIcards from "../MUIcards";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);
  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:5000/post");
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
    if (page === 1) {
      setDisplayed(posts.slice(0, 9));
    }
  }, [posts]);

  useEffect(() => {
    setDisplayed(posts.slice((page - 1) * 9, page * 9));
  }, [page]);
  return (
    <div className="cards-container">
      <Grid container spacing={3} alignItems="stretch">
        {displayed.map((card) => (
          <Grid item xs={6} sm={4} xl={3} className="card">
            <MUIcards {...card} />
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        {[...Array(Math.ceil(posts.length / 9)).keys()].map((n) => (
          <a
            onClick={() => {
              setPage(n + 1);
            }}
          >
            {n + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Posts;
