const express = require("express");
const router = express.Router();
const slash = require('slash');
const multer = require('multer');
const Projet = require("../../models/Projet");

router.get("/", (req, res) => {
    Projet.find({})
    .then(projet => res.json(projet))
    .catch(err => console.log(err));
   // res.render('index')
});
router.post("/ajoutProjet/", (req, res) => {

  const newprojet = new Projet({
    annee: req.body.annee,
    nom: req.body.nom,
    description : req.body.description , 
    etat : req.body.etat , 
  });
  newprojet.save(req.body.projet)
    .then(projet => res.json(projet))
    .catch(err => console.log(err));
});


router.get("/supprimer/:id", (req, res) => {
  Projet.remove({ _id: req.params.id })
    .then(projet => res.json(projet))
    .catch(err => console.log(err));
});

router.put("/modifier", (req, res) => {
  req.body.projet = {
    _id: req.body._id,
    annee: req.body.annee,
    nom: req.body.nom,
    description: req.body.description , 
    etat : req.body.etat 
  };
  console.log(req.body.projet);
  Projet.updateMany({
      _id: req.body.projet._id
    }, {
      $set: req.body.projet
    })
    .then(projet => res.json(projet))
    .catch(err => console.log(err));
});
module.exports = router;