const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
var fs = require('fs');
const path = require('path');
const slash = require('slash');
const multer = require('multer');
const Document = require("../../models/document");


var store = multer.diskStorage({
  destination : function(req,file , cb ){
      var dir = "./uploads/document";
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
    Document.find({})
    .then(document => res.json(document))
    .catch(err => console.log(err));
   // res.render('index')
});


router.post("/addDocument/", (req, res) => {

  const newdocument = new Document({
    nom: req.body.nom,
    doc: req.body.doc
  });
  newdocument.save(req.body.document)
    .then(document => res.json(document))
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
  Document.remove({ _id: req.params.id })
    .then(doc => res.json(doc))
    .catch(err => console.log(err));
});


router.put("/modifier", (req, res) => {
  req.body.document = { _id:req.body._id , doc: req.body.doc ,nom : req.body.nom   };
  console.log(req.body.document)
    Document.updateMany({ _id: req.body.document._id }, { $set: req.body.document })
              .then(document => res.json(document))
              .catch(err => console.log(err));
  
});

module.exports = router;