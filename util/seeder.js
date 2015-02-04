var mongoose = require('mongoose'),
    issues = require('../models/issues');

// A few issues to we'll use to seed the db
var sampleIssues = [
	{
		desc: 'Increasing the page group limit from 200 to 400',
		body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \r\n\r\ Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \r\n\r\ncc Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
		reporter: 'salexand',
		assignedTo: 'walexand',
		tags: ['defect', 'performance', 'api']
	},
	{
		desc: 'System crash with error Could not open DB Connection for transaction',
		body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
		reporter: 'salexand',
		assignedTo: 'malexand',
		tags: ['defect', 'crash']
	},
	{
		desc: 'Strings not translated correctly in product documentation',
		body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
		reporter: 'salexand',
		assignedTo: 'jalexand',
		tags: ['defect', 'translation']
	}
];

module.exports = {

	// Helper method to seed the db with a few recs
	checkAndSeed: function(min) {

		// Testing: Remove the recs to force the population below
		// issues.Issue.find({}).remove().exec();

		issues.Issue.find({}, function(err, recs) {
			
			// If less than min recs in db, seed with a few
			if (recs.length < min) {
				
				console.log('Less than ' + min + ' recs found, seeding with a few recs');
				
				// Create a Mongoose model for an issue and persist it to Mongo
				sampleIssues.forEach(function(issue) {
    				var newIssue = new issues.Issue({
    					description: issue.desc,
					  	body: issue.body,
					  	reporter: issue.reporter,
					  	assignedTo: issue.assignedTo,
					  	tags: issue.tags
    				}).save(function (err, issue) {
    					console.log('Successfully inserted issue: ' + issue._id);
    				});
				});

			} else {
                console.log('Found ' + recs.length + ' existing recs, so not seeding!');
            }
        });
    }
};