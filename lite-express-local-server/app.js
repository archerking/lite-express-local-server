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

var server = app.listen('8080', '127.0.0.1', function(){
	console.log('Server listening at:8080');
});