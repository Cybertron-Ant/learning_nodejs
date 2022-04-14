


var fs = require('fs');


//store what was read in variable "read"
var read = fs.readFileSync('word.txt', 'utf-8');


console.log(read);

