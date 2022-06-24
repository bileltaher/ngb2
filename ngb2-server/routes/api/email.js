const express = require("express");
const router = express.Router();
const Email = require("../../models/emails");
router.get("/", (req, res) => {
   Email.find({})
    .then(email => res.json(email))
    .catch(err => console.log(err));
   // res.render('index')
});


router.post("/addemail/", (req, res) => {

  const newemail = new Email({
    mail: req.body.mail,
  });
  newemail.save(req.body.Email)
    .then(mail => res.json(mail))
    .catch(err => console.log(err));
});




module.exports = router;