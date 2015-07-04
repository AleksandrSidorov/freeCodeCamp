/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Here are some helpful links:

Arguments object
Array.shift()
*/

function drop(arr, func) {
  while (arr.length > 0) {
    if ([arr[0]].some(func)) {
      return arr;
    } else {
      arr.shift();
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
