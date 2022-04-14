



//importing CORE module
var fs = require('fs');



//is Asynchronous
//fires a callback function when "notes" directory is created
//fires a callback function when "wordlist1" is read
//write was read from "wordlist1" into "newfile.txt"
fs.mkdir("book", function({
  fs.readFile("wordlist1.txt", "utf-8", function(error, data){
    fs.writeFile("./book/notes.txt", data)
  });
});