var express 		= require('express');
var bodyParser 		= require('body-parser');
var mongoose 		= require('mongoose');
var issuesrouter 	= require('./routes/issuesroutes'); //routes are defined here
var app 			= express();
var seeder			= require('./util/seeder');
var cors 			= require('cors');

// If on Bluemix, use the Mongo we bound to our app. Otherwise, use
// local dev workstation Mongo.
if (process.env.VCAP_SERVICES) {
	console.log("Using credentials from VCAP...");
	// We're on Bluemix. Use Mongo info in VCAP
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var mongocreds = env['mongodb-2.4'][0].credentials;
    mongoose.connect(mongocreds.url, {
    	user: mongocreds.username,
    	pass: mongocreds.password
    });
} else {
	// Local workstation.
	console.log("No VCAP, using manual");
	var dbName = 'issuesDB5';
	var connectionString = 'mongodb://localhost:27017/' + dbName;
	mongoose.connect(connectionString);
}

mongoose.connection.on('open', function() {
	console.log("Connected to db...");
	// If no recs in db, populate it with a few recs
	seeder.checkAndSeed(3); 
});

//configure body-parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

// Enable CORS for all routes
app.use(cors());

app.use('/api', issuesrouter); // This is our route middleware

// module.exports = app;
app.set('port', process.env.PORT || 8000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});