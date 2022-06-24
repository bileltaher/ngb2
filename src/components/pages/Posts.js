import { Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Posts.css";

import SelectedPost from "../selectedpost/SelectedPost";
import Button from "@material-ui/core/Button";
import { UserContext } from "../../services/UserContext";
import Modal from "../selectedpost/AddPostModal";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState([]);
  const [modal, setModal] = useState(false);

  const userContext = useContext(UserContext);

  const getPosts = async () => {
    const { data } = await axios.get("http://localhost:5000/post");
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

  const btn = userContext.user ? (
    <div className="add_btn">
      <Button variant="outlined" onClick={() => setModal(!modal)}>
        {modal ? "Back" : "Add Post"}
      </Button>
    </div>
  ) : (
    <></>
  );

  useEffect(() => {
    setDisplayed(posts.slice((page - 1) * 8, page * 8));
  }, [page]);
  return (
    <>
      {btn}
      {modal ? (
        <Modal />
      ) : (
        <div className="cards-container">
          <Grid container spacing={3} alignItems="stretch">
            {displayed.map((card) => (
              <Grid item xs={6} sm={4} xl={3} className="card">
                <SelectedPost {...card} setState={setPosts} state={posts} />
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
      )}
    </>
  );
}
export default Posts;
