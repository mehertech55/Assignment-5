# Assignment-5
RESTful Web Service Implementation + Docker

# Customer Data Model with Node.js + Express Rest API + Docker

To run the project from your local server you must have node js installed in your local machine and do the following:
1) Download the project from repository
2) Go to the api folder in command prompt
3) Run "npm start" command in command prompt
4) Open "http://localhost:8080/" in your browser.

To create docker image run the following commands after creating dockerfile in your root directory:
1) docker build -t node-docker-tutorial .
2) docker run -it -p 9000:8080 node-docker-tutorial
3) Open "http://localhost:9000/" in your browser.

By doing this, application will work on docker container at port 9000.
