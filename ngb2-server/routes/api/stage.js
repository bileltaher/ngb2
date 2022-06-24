const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
var fs = require('fs');
const path = require('path');
const slash = require('slash');
const multer = require('multer');
const Stage = require("../../models/stage");

router.get("/", (req, res) => {
    Stage.find({})
    .then(stage => res.json(stage))
    .catch(err => console.log(err));
   // res.render('index')
});

var store = multer.diskStorage({
  destination: function (req, file, cb) {
      var dir = "./uploads/cv";
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


router.post("/addStage/", (req, res) => {

  const newstage = new Stage({
    prenom: req.body.prenom,
    nom: req.body.nom,
    sujet : req.body.sujet , 
    description : req.body.description , 
    universite : req.body.universite , 
    specialite : req.body.specialite,
    ville : req.body.ville ,
    email : req.body.email , 
    tel : req.body.tel ,
    cv : req.body.cv , 
    autre : req.body.autre 
  });
  newstage.save(req.body.stage)
    .then(stage => res.json(stage))
    .catch(err => console.log(err));
});


router.get("/supprimer/:id", (req, res) => {
  Stage.remove({ _id: req.params.id })
    .then(stage => res.json(stage))
    .catch(err => console.log(err));
});

router.put("/modifier", (req, res) => {
  req.body.stage = { _id:req.body._id , dateEntretien: req.body.dateEntretien ,etat : req.body.etat   };
  console.log(req.body.stage)
        Stage.updateMany({ _id: req.body.stage._id }, { $set: req.body.stage })
              .then(stage => res.json(stage))
              .catch(err => console.log(err));
  
});

module.exports = router;