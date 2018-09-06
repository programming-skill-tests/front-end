var express = require('express');
var router = express.Router();
var dbConnection = require('../routes/dbConnection.js');

/* GET users listing. */
router.get('/getlist', function (req, res, next) {
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
  var data = { title: req.body.title, director: req.body.director, cast: req.body.cast, genre: req.body.genre };
  var queryStr = "Insert into Movies set ?";
  dbConnection.query(queryStr, data,
    function (err, results) {
      if (err) {
        res.status(400).send("Error Occured");
      } else {
        res.send(results);
      }
    });
});

router.post('/delete', function (req, res, next) {
  console.dir(req.body);
  var queryStr = "delete from Movies where id In(";
  dbConnection.query(queryStr, data,
    function (err, results) {
      if (err) {
        res.status(400).send("Error Occured");
      } else {
        res.send(results);
      }
    });
});
module.exports = router;

