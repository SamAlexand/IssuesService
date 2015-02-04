# IssuesService
The beginnings of a sample REST service for a simplistic defect tracking application built with Node, Express, Mongoose and Mongo. The <a href="https://github.com/SamAlexand/IssuesUI/">IssuesUI</a> application uses this service.

This is part of my presentation at 2015 IBM ConnectED conference entitled  "AD203: Building Digital Experiences in the Cloud with BlueMix and WebSphere Portal Tools."  It can run in a standalone development environment or it can be installed and hosted on IBM BlueMix (a Platform as a Service offering from IBM) via the Cloud Foundry Command Line Interface (CLI).

<h3>Running Locally</h3>
- Install Node
- Install MongoDB
- In the directory containing this code, type "npm install"
- To run the app, type "node app"

<h3> Installing and Running on Bluemix </h3>
- Create Bluemix account
- Create new Application (web). 
- Select IBM SDK for Node.JS
- Create new Service
- Select MongoDB
- Bind it to the application you created above.
- Open the Dashboard for the application you created above
- Select "Start Coding" from the left navigation
- Use the simple steps on the Start Coding page to push the service to Bluemix

 ** <i> Note that this application is for demonstration purposes only and is not supported by my employer.</i>  **



