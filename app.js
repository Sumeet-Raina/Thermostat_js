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