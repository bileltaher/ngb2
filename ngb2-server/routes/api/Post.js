const express = require("express");
const router = express.Router();
const Post = require("../../models/posts");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { callbackPromise } = require("nodemailer/lib/shared");

router.get("/", (req, res) => {
  Post.find({})
    .then((event) => {
      res.json(event);
    })
    .catch((err) => console.log(err));
});
router.post("/addPost", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: new Date(),
  });
  newPost
    .save(req.body.post)
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

var store = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "../public/uploads/posts";
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // "+ 1" becouse the 1st month is 0
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    let id =
      year +
      "" +
      month +
      "" +
      day +
      "" +
      "" +
      hour +
      "" +
      minutes +
      "" +
      seconds;
    file.originalname = id + file.originalname.replace(/^.*\./, ".");

    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: store,
}).array("files", 12);

router.post("/uploads", (req, res, next) => {
  upload(req, res, function (err) {
    const file = req.files;
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({
      fich: file,
    });
  });
});

router.get("/deletePost/:id", (req, res) => {
  Post.remove({
    _id: req.params.id,
  })
    .then((event) => res.json(event))
    .catch((err) => console.log(err));
});

module.exports = router;
