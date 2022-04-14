

//store my server in a variable to use later
var http = require('http');

//import CORE file system module
var fs = require('fs');


//create a readstream
//(__dirname) gets current working directory
//be sure to specify the character encoding (utf-8) as a parameter
var myReadStream = fs.createReadStream(__dirname + '/wordlist1.txt', 'utf-8');

//runs a function for/on the "data" event
//(on) is an event listener for the ("data") event, every time a chunk is read, it calls a function
//be sure to include "error" as a parameter to catch errors
myReadStream.on('data', function(chunk, error){
  console.log("New chunk received: ");
  //read file until error message is received
  console.log(chunk, (error) => {"End of file"} );

});



