var debug = debug || console.log;

// Setup server
var express = require('express');
var app = express();
var SERVERPORT = process.env.PORT || 3000;

var secretStuff = process.env.Secret || 'No secret!';

// Statics
app.use(express.static('public'));

app.get('/secret', function(req,res) { return res.json({ secret: secretStuff }); });

// ELSE!
app.use(function(req, res, next){
	res.writeHead(302, {
	  'Location': '/'
	});
	res.end();
});

// Start the app
var server = app.listen(SERVERPORT, function() {
  debug('Express server listening on port ' + server.address().port);
});
