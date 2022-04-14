



var fs = require('fs');



//the third parameter is a "callback function"
//the function returns an error if not successful
//this is "Asynchronous"
fs.readFile('word.txt', 'utf-8', function(error,data) {

//pass (error) as an argument in case it fails
//(error) is the callback function
//if file does not exist, it will create and write to it
  fs.writeFile('new.txt', data, (error) => {} );
});


//can run other code while file is being written to