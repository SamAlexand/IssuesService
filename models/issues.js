// A Node module for working with Issues in the database
var mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

// Define a Mongoose Schema for an issue
var issueSchema = new Schema({
  issueId: Number,
  description: String,
  body: String,
  reporter: String,
  assignedTo: String,
  createdData: { type: Date, default: Date.now },
  tags: [String],
});

// Make our Issue Model available as a module. Consumers can then use "require" to import
module.exports = { 
	Issue: mongoose.model('Issue', issueSchema)
};