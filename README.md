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

<h3> Using the REST API </h3>
<h4>Retrieve all issues</h4>
http://&#60;your app name&#62;.mybluemix.net/api/issues
<p>Example output:</p>
<pre  style="font-family:arial;font-size:9px;border:1px dashed #CCCCCC;width:99%;height:auto;overflow:auto;background:#f0f0f0;;background-image:URL(http://2.bp.blogspot.com/_z5ltvMQPaa8/SjJXr_U2YBI/AAAAAAAAAAM/46OqEP32CJ8/s320/codebg.gif);padding:0px;color:#000000;text-align:left;line-height:20px;"><code style="color:#000000;word-wrap:normal;"> [  
 {  
 description: "Increasing the page group limit from 200 to 400",  
 body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. cc Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",  
 reporter: "salexand",  
 assignedTo: "walexand",  
 _id: "54b3eda25c1c5c200014b3ef",  
 __v: 0,  
 tags: [  
 "defect",  
 "performance",  
 "api"  
 ],  
 createdData: "2015-01-12T15:52:02.896Z"  
 },  
 {  
 description: "System crash with error Could not open DB Connection for transaction",  
 body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",  
 reporter: "salexand",  
 assignedTo: "malexand",  
 _id: "54b3eda25c1c5c200014b3f0",  
 __v: 0,  
 tags: [  
 "defect",  
 "crash"  
 ],  
 createdData: "2015-01-12T15:52:02.906Z"  
 },  
 {  
 description: "Strings not translated correctly in product documentation",  
 body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",  
 reporter: "salexand",  
 assignedTo: "jalexand",  
 _id: "54b3eda25c1c5c200014b3f1",  
 __v: 0,  
 tags: [  
 "defect",  
 "translation"  
 ],  
 createdData: "2015-01-12T15:52:02.906Z"  
 }  
 ]  
</code></pre>


<h4>Retrieve a single issue</h4>
http://&#60;your app name&#62;.mybluemix.net/api/issues/54b3eda25c1c5c200014b3ef
<p>Example output:</p>
<pre  style="font-family:arial;font-size:9px;border:1px dashed #CCCCCC;width:99%;height:auto;overflow:auto;background:#f0f0f0;;background-image:URL(http://2.bp.blogspot.com/_z5ltvMQPaa8/SjJXr_U2YBI/AAAAAAAAAAM/46OqEP32CJ8/s320/codebg.gif);padding:0px;color:#000000;text-align:left;line-height:20px;"><code style="color:#000000;word-wrap:normal;"> {  
 description: "Increasing the page group limit from 200 to 400",  
 body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. cc Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",  
 reporter: "salexand",  
 assignedTo: "walexand",  
 _id: "54b3eda25c1c5c200014b3ef",  
 __v: 0,  
 tags: [  
 "defect",  
 "performance",  
 "api"  
 ],  
 createdData: "2015-01-12T15:52:02.896Z"  
 }  
</code></pre>
 ** <i> Note that this application is for demonstration purposes only and is not supported by my employer.</i>  **



