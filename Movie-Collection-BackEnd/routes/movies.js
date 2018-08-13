var express = require('express');
var router = express.Router();
var dbConnection = require('../routes/dbConnection.js');

/* GET users listing. */
router.get('/getlist', function (req, res, next) {
  console.log("Welcome")
  var queryStr = "Select *from Movies";
  dbConnection.query(queryStr,
    function (err, results) {
      if (err) {
        res.status(400).send("Error Occured");
      } else {
        res.send(results);
      }
    });
});
router.post('/add', function (req, res, next) {
 // var queryStr = "";
  dbConnection.query(queryStr,
    function (err, results) {
      if (err) {
        res.status(400).send("Error Occured");
      } else {
        res.send(results);
      }
    });
});
module.exports = router;
