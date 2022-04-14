
var fs = require('fs');


//store what was read in variable "read"
var read = fs.readFileSync('wordlist1.txt', 'utf-8');

//synchronuous
//two parameters, the file you selected, and what to write
fs.writeFileSync("buffalo.txt", read);



