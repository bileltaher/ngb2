import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { Fragment, useRef, useState } from "react";
import axios from "axios";

const Modal = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [file, setFile] = useState(null);

  const uploadInputRef = useRef(null);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("files", file);
    let image = "";
    await axios
      .post("http://localhost:5000/post/uploads", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        image = response.data.fich[0].originalname;
      });
    if (image !== "") {
      axios
        .post("http://localhost:5000/post/addPost", {
          title,
          description,
          image,
        })
        .then(() => window.location.reload(false));
    }
  };
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "green" }}>
        <AddCircleOutlineIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Post
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Post Title"
          onChange={(e) => {
            setTitleError("");
            setTitle(e.target.value);
          }}
          value={title}
          name="Title"
          autoComplete="Title"
          autoFocus
        />
        {titleError && (
          <div style={{ fontSize: "12", width: "100%", color: "red" }}>
            {titleError}
          </div>
        )}
        <br />
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          onChange={(e) => {
            setDescriptionError("");
            setDescription(e.target.value);
          }}
          value={description}
          id="description"
          autoComplete="Title"
        />
        {descriptionError && (
          <div style={{ fontSize: "12", width: "100%", color: "red" }}>
            {descriptionError}
          </div>
        )}
        <Fragment>
          <input
            ref={uploadInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onInputChange}
          />
          <Button
            onClick={() =>
              uploadInputRef.current && uploadInputRef.current.click()
            }
            variant="contained"
          >
            Upload
          </Button>
        </Fragment>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Modal;
