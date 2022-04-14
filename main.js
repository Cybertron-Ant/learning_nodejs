

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
  //treat content type as a HTML file
  res.writeHead(200, {'Content-Type': 'text/html'});
  //create a readstream
//(__dirname) gets current working directory
//be sure to specify the character encoding (utf-8) as a parameter
//specify HTML filename that you want to serve/stream/pipe/send
var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');

  //end response and send back 'text/HTML'
  //the (res) is an object that I can write/pipe to
  myReadStream.pipe(res);

});


server.listen(3000, '127.0.0.1');
console.log('listening to port for you now');