/*
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(),
setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument
will be a string.

These methods must be the only available means for interacting with the object.


Here are some helpful links:

Closures
Details of the Object Model
*/

var Person = function(firstAndLast) {

  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };

  this.getFullName = function() {
    return firstAndLast;
  };

  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };

  this.setFirstName = function(first) {
    var myResult = first + " " + firstAndLast.split(" ")[1];
    firstAndLast = myResult;
  };

  this.setLastName = function(last) {
    var myLast = firstAndLast.split(" ")[0] + " " + last;
    firstAndLast = myLast;
  };

  this.setFullName = function(firstAndL) {
    firstAndLast = firstAndL;
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();
