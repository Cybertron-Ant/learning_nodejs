

//importing CORE module
var fs = require('fs');

//delete file
//(err) => {} is a callback function, if file is not found
fs.unlink("file.txt", (err) => {} );



