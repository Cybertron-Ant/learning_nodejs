

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
  //send PLAIN text response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === "/home" || req.url === "/") {
    
    //status header is 200(okay)
    //send HTML response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //read the website file and pipe it to the response objec
    fs.createReadStream(__dirname + "/index.html").pipe(res);

  } else if (req.url === "/contact") {
    
    //status header is 200(okay)
    //send HTML response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //read the contact.html file and pipe it to the response object
    fs.createReadStream(__dirname + "/contact.html").pipe(res);

//api & ant is a custom URL generated on the fly
  } else if (req.url === "/api/ant") {
  
    var team = [
      {name: "Kakashi Hatake", age: 20},
      {name: "Obito Uchiha", age: 21}
    ];
                
    //send JSON response header
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    //transform JSON array into a string
    res.end(JSON.stringify(team));

  } else {
    
    //send HTML response(404) header
    res.writeHead(404, {'Content-Type': 'text/html'});
    
    //serve the 404 error page
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }

  //end response and send back 'text/plain'
  //the (res) is an object that I can write/pipe to
  //res.end('I am the King of Games!');

});


server.listen(3000, '127.0.0.1');
console.log('listening to port for you now master Kaiba');