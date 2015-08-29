/*
Repeat a given string (first argument) n times (second argument). Return an
empty string if n is a negative number.

Here are some helpful links:
Global String Object
*/

function repeat(str, num) {
  var result = '';
  for (var i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

repeat('abc', 3);
