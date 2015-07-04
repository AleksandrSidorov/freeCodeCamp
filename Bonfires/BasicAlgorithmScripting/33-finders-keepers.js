/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Here are some helpful links:

Array.some()
*/

function find(arr, func) {
  var num;
  for (var i in arr) {
    if ([arr[i]].some(func)) {
        return arr[i];
    }
  }

  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
