



var counter = function(arr) {

 return "There are " + arr.length + " elements in this array";

}

//I have to console.log what I returned from the function
//console.log(counter(["Antonio", "Behn", "Fuller"]));


//export a variable to make it available in other files
//use the ".exports" property, don't get it wrong
module.exports = counter;