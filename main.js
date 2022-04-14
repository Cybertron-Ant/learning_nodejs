



//importing CORE module
var fs = require('fs');


//is Synchronous
//creates a folder, not a file
//(err) => {} is a callback function, if file is not found
fs.mkdirSync("book", (err) => {} );