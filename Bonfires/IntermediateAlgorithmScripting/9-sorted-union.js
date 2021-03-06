/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

Here are some helpful links:

Array.reduce()
*/

function unite(arr1, arr2, arr3) {
  var result = [];
  var flatArr = [arr1, arr2, arr3].reduce(function(a, b) {
    return a.concat(b);
  });
  for (var i = 0; i < flatArr.length; i++) {
    if (result.indexOf(flatArr[i]) === -1) {
      result.push(flatArr[i]);
    }
  }
  return result;
}

function uniteV2(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  var flatArr = args.reduce(function(x, y) {
    return x.concat(y);
  });
  var result = flatArr.filter(function(a, i) {
    return flatArr.indexOf(a) === i;
  })
  return result;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
