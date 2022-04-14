
var fs = require('fs');


//store what was read in variable "read"
//the third parameter is a "callback function"
//the function returns an error if not successful
//this is "Asynchronous"
fs.readFile('word.txt', 'utf-8', function(error, data){
  console.log(data);

});


//can run other code while file is being read




