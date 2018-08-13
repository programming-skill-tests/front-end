var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var envvariables = require('../routes/envvariable.js');

var connection = mysql.createConnection({
    host: envvariables[process.env.NODE_ENV].db_hostname,
    user: envvariables[process.env.NODE_ENV].db_user,
    password: envvariables[process.env.NODE_ENV].db_password,
    port: envvariables[process.env.NODE_ENV].db_port,
    database: envvariables[process.env.NODE_ENV].databaseName
});

connection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Movies Database Connected Sucessfully...")
    }
});

module.exports = connection;