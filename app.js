/**
 * Load the appropriate modules for our web application
 */
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');


/**
 * ** Initial setup
 */

/**
 * Setup the Express engine
 */
var app = express();
app.listen(config.app.port);


app.configure(function() {
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
});


/**
 * This are our routes. 
 */
// Landing page with instructions
app.get('/', function(req, res) {    
   res.redirect('/index.html'); 
});

// Spiceworks integration
app.get('/main', function(req, res) {    
   res.redirect('/main.html'); 
});

// Spiceworks integration
app.get('/ticket', function(req, res) {    
   res.redirect('/ticket.html'); 
});

/*
 * our server
*/
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + config.app.port);
});

/**
 * Add deploy tracker client
 */
require("cf-deployment-tracker-client").track();
