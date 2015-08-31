/*
We'll pass you an array of two numbers. Return the sum of those two numbers and
all numbers between them.

The lowest number will not always come first.

Here are some helpful links:
Math.max()
Math.min()
Array.reduce()
*/

function sumAll(arr) {
  var result = 0;
  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    result += i;
  }
  console.log(result);
  return result;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
