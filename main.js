



//importing CORE module
var fs = require('fs');


//is Synchronous
//removes/deletes a folder, not a file
//(err) => {} is a callback function, if file is not found
fs.rmdirSync("book", (err) => {} );