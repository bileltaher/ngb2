const express = require("express");
const router = express.Router();
const Event = require("../../models/event");
const FTP = require("ftp");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { callbackPromise } = require("nodemailer/lib/shared");
const { resourceUsage } = require("process");

router.get("/", (req, res) => {
  Event.find({})
    .then((event) => {
      res.json(event);
    })
    .catch((err) => console.log(err));
});
router.post("/addEvent", (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    description: req.body.description,
    nbParticipant: req.body.nbParticipant,
    image: req.body.image,
    date: req.body.date,
  });
  newEvent
    .save(req.body.event)
    .then((event) => res.json(event))
    .catch((err) => console.log(err));
});

var store = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
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
  //console.log(req.file)
  upload(req, res, function (err) {
    const file = req.files;
    if (err) {
      return res.send("Somethingone wrong ");
    }
    return res.json({
      fich: file,
    });
  });
});

router.get("/deleteEvent/:id", (req, res) => {
  Event.remove({
    _id: req.params.id,
  })
    .then((event) => res.json(event))
    .catch((err) => console.log(err));
});

module.exports = router;
