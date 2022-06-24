const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
var fs = require('fs');
const path = require('path');
const slash = require('slash');
const multer = require('multer');
const Rapport = require("../../models/rapport");

var store = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads/rapport";
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
    var seconds = date.getSeconds()
    let id = year + "" + month + "" + day + "" + "" + hour + "" + minutes + "" + seconds;
    file.originalname = id + file.originalname.replace(/^.*\./, '.');
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: store
}).array('files', 12);


router.get("/", (req, res) => {
  Rapport.find({})
    .then(document => res.json(document))
    .catch(err => console.log(err));
  // res.render('index')
});


router.post("/addRapport/", (req, res) => {

  const newrapport = new Rapport({
    nom: req.body.nom,
    doc: req.body.doc,
    type: req.body.type
  });
  newrapport.save(req.body.rapport)
    .then(rapport => res.json(rapport))
    .catch(err => console.log(err));
});
router.post('/uploads', (req, res, next) => {
  //console.log(req.file)
  upload(req, res, function (err) {
    const file = req.files;
    if (err) {
      return res.send("Somethingone wrong ");
    }
    return res.json({
      fich: file
    });
  });
});


router.get("/supprimer/:id", (req, res) => {
  Rapport.remove({
      _id: req.params.id
    })
    .then(doc => res.json(doc))
    .catch(err => console.log(err));
});

router.put("/modifier", (req, res) => {
  req.body.rapport = {
    _id: req.body._id,
    doc: req.body.doc,
    nom: req.body.nom,
    type: req.body.type
  };
  console.log(req.body.rapport);
  Rapport.updateMany({
      _id: req.body.rapport._id
    }, {
      $set: req.body.rapport
    })
    .then(rapport => res.json(rapport))
    .catch(err => console.log(err));
});

module.exports = router;