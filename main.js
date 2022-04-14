

//store my server in a variable to use later
var http = require('http');

//create server
//pass parameters to handle a request and a response
//request object and a response object
//(req) request + request headers
//(res) response data + response headers
var server = http.createServer(function(req, res){
  //(url) is a property of the (req object)
  console.log("Request was made: " + req.url);
  //write a response header
  //pass in parameter(200) response header means "ok"
  //pass in an object as a parameter
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //end response and send back 'text/plain'
  res.end("Hey Antonio!");

});


server.listen(3000, '127.0.0.1');
console.log('listening to port for you now');



