const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const event = require("./routes/api/event");
const weather = require("./routes/api/weather");
const stage = require('./routes/api/stage');
const partenariat = require('./routes/api/Partenariat');
const mail = require('./routes/api/email');
const projet = require('./routes/api/projet');
const Post = require('./routes/api/Post');
const document = require('./routes/api/document');
const rapport = require('./routes/api/rapport');
const nodemailer = require("nodemailer");
var multer = require('multer');
var cors = require('cors');
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.json());
var whitelist = ['https://www.sharek-it.tn', 'http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//to fix problem of No 'Access-Control-Allow-Origin'
app.use(cors());

 app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': '*'
  })
  next();
})
 
//Multer to upload the photo on the server side.
//app.use(multer({dest:'./uploads/'}).single('photo'));
const path = require('path');
const { post } = require("./routes/api/Post");
app.use(express.static(path.join(__dirname,'public')))
// DB Config
const db = require("./config/keys").mongoURI;
app.set('view engine','ejs');
// Connect to MongoDB
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/", event);
app.use("/partenariat",partenariat);
app.use("/weather",weather);
app.use("/stage",stage);
app.use("/mail",mail);
app.use("/projet",projet);
app.use("/document",document);
app.use("/rapport",rapport);
app.use("/post",Post);
app.use('/uploads', express.static('uploads'));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));