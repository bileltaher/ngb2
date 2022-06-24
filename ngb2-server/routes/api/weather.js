const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
var fs = require('fs');
const path = require('path');
const slash = require('slash');
const multer = require('multer');
const http = require('http');
const axios = require('axios');
const keepAliveAgent = new http.Agent({ keepAlive: true });
router.get("/", (req, res) => {
    var url = 'http://api.weatherstack.com/current?access_key=940546bd18bbf47c4e60622c149e34e1&query=Monastir%20TN';
    axios.get(url)
    .then(function (response) {
      // handle success
     res.json(response.data) ;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});



module.exports = router;