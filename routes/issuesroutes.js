var issues = require('../models/issues'); // import the Issues module
var express = require('express');
var router = express.Router();

// This module defines the routes for our RESTful API

// For demo purposes, the code (i.e. calling to Mongo) to hndle the action 
// is defined directly in the router.VERB. It would likely be better to 
// make the Router actions light weight, calling out to a helper class
// instead.

// Define Route for LIST of Issues. Use HTTP Verbs.  i.e. /api/issues
router.get('/issues', function(req, res) {
    
    console.log("DEBUG: HTTP GET on /api/issues...");

    // Using Mongoose "model.find" API to find mongo "documents".  
    issues.Issue.find({}, function(err, issues) {
        if (err) {
            console.log("error");
            return res.send(err);
        }
        res.json(issues);
    });

});

// Define Route for RETRIEVE ONE issue.  This route uses :issue_id named parameter.  
// i.e. /api/issues/73323
router.get('/issues/:issue_id', function(req, res) {
    
    console.log("DEBUG: HTTP GET on /api/issues/" + req.params.issue_id);

    // Use Mongoose model.findById API to find a single "document"
    issues.Issue.findById(req.params.issue_id, function(err, issue) {
        if (err) {
            console.log("error");
            return res.send(err);
        }
        res.json(issue);
    });

});

module.exports = router;