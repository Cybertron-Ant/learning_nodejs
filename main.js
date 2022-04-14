

const events = require('events');
const util = require('util');

//create a class that extends 'events'
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}


//instanciate class 'Person' 3 times
const joe = new Person('joe');
const gladys = new Person('gladys');
const kaya = new Person('kaya');

//pass all class instances into an array
const people = [joe, gladys, kaya];

//emit a 'speak' event for each person in the array
people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' says ' + msg);
    });
});



//emit a 'speak' event for 'joe' class instance
joe.emit('speak', 'ES6, the heck!');