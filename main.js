

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
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //create a readstream
//(__dirname) gets current working directory
//be sure to specify the character encoding (utf-8) as a parameter
var myReadStream = fs.createReadStream(__dirname + '/wordlist1.txt', 'utf-8');

  //end response and send back 'text/plain'
  //the (res) is an object that I can write/pipe to
  myReadStream.pipe(res);

});


var myserver = server.listen(3000, '127.0.0.1');
console.log('listening to port for you now ', myserver);


