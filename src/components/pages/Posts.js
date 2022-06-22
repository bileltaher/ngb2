import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UndoIcon from "@mui/icons-material/Undo";
import "./Posts.css";

import SelectedPost from "../selectedpost/SelectedPost";
import Button from "@material-ui/core/Button";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const clickHandler = (item) => {
    setCurrentItem(item);
  };
  const getPosts = async () => {
    const { data } = await axios.get(
      "https://notregrandbleu.herokuapp.com/post"
    );
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (page === 1) {
      setDisplayed(posts.slice(0, 9));
    }
  }, [posts]);

  useEffect(() => {
    setDisplayed(posts.slice((page - 1) * 9, page * 9));
  }, [page]);
  return currentItem === "" ? (
    <div className="cards-container">
      <Grid container spacing={3} alignItems="stretch">
        {displayed.map((card) => (
          <Grid item xs={6} sm={4} xl={3} className="card">
            <SelectedPost {...card} clickHandler={clickHandler} />
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
  ) : (
    <div className="selectedPost">
      <SelectedPost {...currentItem} clickHandler={clickHandler} />
      <Button
        color="primary"
        size="large"
        startIcon={<UndoIcon />}
        onClick={() => {
          setCurrentItem("");
        }}
      >
        Back
      </Button>
    </div>
  );
}
export default Posts;
