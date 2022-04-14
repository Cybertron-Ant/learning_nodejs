

//importing CORE module
var fs = require('fs');



//is Asynchronous
//fire callback function when "notes" file is deleted
//delete "book" directory next
//(err) => {} is a callback function, if file is not found
fs.unlink("./book/notes.txt", function(){
  fs.rmdir("book", (err) => {} );
});