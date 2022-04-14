
var events = require('events');

//'util' is a CORE module
var util = require('util');


var Person = function(name) {
  this.name = name;

};


util.inherits(Person, events.EventEmitter);

var antonio = new Person('Antonio');
var behn = new Person('Behn');
var fuller = new Person('Fuller');

var people = [antonio, behn, fuller];


//create a custom event 'speak'
people.forEach(function(person){
   person.on('speak', function(message){
     console.log(person.name + ' said: ' + message);

    });
 });

//(emit) means "occur" or "happen"
antonio.emit('speak', 'hey dude');




console.log(antonio);






