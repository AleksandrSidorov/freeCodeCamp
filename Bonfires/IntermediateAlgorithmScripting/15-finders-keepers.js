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

function findV2(arr, func) {
  var num = arr.filter(func);
  return num[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
