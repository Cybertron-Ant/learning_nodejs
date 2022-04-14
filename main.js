

//store my server in a variable to use later
var http = require('http');

//import CORE file system module
var fs = require('fs');


//create server
//pass parameters to handle a request and a response
//request object and a response object
//(req) request + request headers
//(res) response data + response headers
//(res) is also a writable object
var server = http.createServer(function(req, res){
  //(url) is a property of the (req object)
  console.log("Request was made: " + req.url);
  //write a response header
  //pass in parameter(200) response header status means "ok"
  //pass in an object as a parameter
  //treat content type as a JSON file
  res.writeHead(200, {'Content-Type': 'application/json'});

  //create an object to send to browser
  var object = {
    //write out my properties
     name : 'Ywach Bach',
     job: 'Computer Scientist',
     Age: '22',
  };

  //the (end) method expects a string or buffer, not JSON objects
  //transform the object into a string with (JSON.stringify)
  res.end(JSON.stringify(object));

});

//activate server
server.listen(3000, '127.0.0.1');

console.log('listening to port for you now');