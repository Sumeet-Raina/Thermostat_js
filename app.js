// To create a Greeting object, we use the function keyword:

function Greeting() {

}

// To define a method:

Greeting.prototype.hello = function(person) {
  return 'Hello, ' + person + '!';
}

// And to use it:
var greeting = new Greeting();
greeting.hello('Maker'); // 'Hello, Maker!'

// For a standalone function that takes no arguments:

function hiTimmy() {
  return 'Hi, Timmy!';
}
// And to use it:

hiTimmy(); // 'Hi, Timmy!'
var myObject = {} // you can make empty objects
var myOtherObject = {
                      some: 'stuff',
                      goes: 'in',
                      here: 123,
                      arrays: ['woah', 'check', 'it'],
                      nestedObject: {another: 'object'},
                      functionsToo: function(foo) { return foo }
}