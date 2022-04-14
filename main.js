

//store my server in a variable to use later
var http = require('http');

//import CORE file system module
var fs = require('fs');


//create a readstream
//(__dirname) gets current working directory
//be sure to specify the character encoding (utf-8) as a parameter
var myReadStream = fs.createReadStream(__dirname + '/wordlist1.txt', 'utf-8');

//create a write stream
//(__dirname) gets current working directory
//specify the file you want to write to
//be sure to specify the character encoding (utf-8) as a parameter
var myWriteStream = fs.createWriteStream(__dirname + '/word.txt', 'utf-8');



//runs a function for/on the "data" event
//(on) is an event listener for the ("data") event, every time a chunk is read, it calls a function
//be sure to include "error" as a parameter to catch errors
myReadStream.on('data', function(chunk, error){
//about 3,888 words are stored in a single chunk
  //a file is always broken into two chunks default
  console.log("New chunk received: ");
  //write to file until error message is received
  myWriteStream.write(chunk);

});


