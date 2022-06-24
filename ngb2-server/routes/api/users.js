const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const nodemailer = require('nodemailer');
var handlebars = require('handlebars');
const path = require('path');
var fs = require('fs');
// @route GET api/users/
// @desc recuperer tous les utilisateurs
// @access Private
router.get("/a", (req, res) => {
    User.find({}).then(user => res.json(user)).catch(err => console.log(err));
});

// @route POST api/users/register
// @desc Register user
// @access Public
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: 'user'
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    
 console.log(email ,password);
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                };
               
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            user : user,
                            success: true,
                            user: user,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

router.post("/contact/:mail", (req, res) => {
     console.log(req.body);
    var readHTMLFile = function(path, callback) {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    var transport = nodemailer.createTransport({
        tls: {
            rejectUnauthorized: false
        },
        host: "smtp.gmail.com",
        port: 25,
        auth: {
          user: "habib.chaabene@esprit.tn",
          pass: "183JFT0485"
        }
      });
      readHTMLFile(path.join(__dirname, '../../views/mail.html') , function(err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            title: req.body.title,
            description: req.body.description,
            nbParticipant: req.body.nbParticipant,
            image: req.body.image,
            date: req.body.date 
        };
        var htmlToSend = template(replacements);
    const message = {
        from: "habib.chaabene@esprit.tn", // Sender address
        to: req.params.mail,         // List of recipients
        subject: 'Event Notre Grand Bleu', // Subject line
        html: htmlToSend // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          res.json(err)
        } else {
          res.json(info);
        }
    });
});
  });  

module.exports = router;