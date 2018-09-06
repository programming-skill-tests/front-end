var express = require('express');
var router = express.Router();
var dbConnection = require('../routes/dbConnection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Welcome To Movie App');
});

module.exports = router;
