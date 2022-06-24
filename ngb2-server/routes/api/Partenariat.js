const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
var fs = require('fs');
const path = require('path');
const slash = require('slash');
const multer = require('multer');
const Partenariat = require("../../models/partenariat");



var store = multer.diskStorage({
  destination : function(req,file , cb ){
      var dir = "./uploads/partenariat";
      if(!fs.existsSync(dir))
      {
          fs.mkdirSync(dir);
      }
      cb(null,dir);
  },
  filename:function(req,file,cb){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;      // "+ 1" becouse the 1st month is 0
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()
    let id = year + "" + month + "" + day + "" + "" + hour + "" + minutes + "" + seconds;
    file.originalname =  id + file.originalname.replace(/^.*\./, '.');
      cb(null,file.originalname );
  }
});
const upload = multer({   storage: store  }).array('files',12);


router.get("/", (req, res) => {
  Partenariat.find({})
    .then(partenariat => res.json(partenariat))
    .catch(err => console.log(err));
   // res.render('index')
});

router.post("/addPartenariat/", (req, res) => {

  const newpartenariat = new Partenariat({
    website: req.body.website,
    type : req.body.type ,
    image: req.body.image
  });
  newpartenariat.save(req.body.partenariat)
    .then(partenariat => res.json(partenariat))
    .catch(err => console.log(err));
});

router.post('/uploads', (req, res, next) => {
  //console.log(req.file)
upload(req,res,function(err){
   const file = req.files ;      
  if(err){
      return res.send("Somethingone wrong ");
  }
  return res.json({fich :file});
});
});

router.get("/supprimer/:id", (req, res) => {
  Partenariat.remove({ _id: req.params.id })
    .then(partenariat => res.json(partenariat))
    .catch(err => console.log(err));
});


router.put("/modifier", (req, res) => {
  req.body.partenariat = {
    _id: req.body._id,
    image: req.body.image,
    website: req.body.website,
    type: req.body.type 
  };
  console.log(req.body.partenariat);
  Partenariat.updateMany({
      _id: req.body.partenariat._id
    }, {
      $set: req.body.partenariat
    })
    .then(partenariat => res.json(partenariat))
    .catch(err => console.log(err));
});

module.exports = router;