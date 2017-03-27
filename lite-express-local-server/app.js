'use strict'

var express = require('express');
var path = require('path');
var app = express();

/*
 * Defining static folder location.
 */
app.use(express.static(path.join(__dirname, 'app')));

/*
 * Add routing congif here.
 */
//app.all('/', function(err, req, res){});

module.exports = app;