/*
Create a function that takes two or more arrays and returns
an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the
elements in two sets that are in either the first or second
set, but not in both.

Here are some helpful links:
Array.reduce()
Symmetric Difference
*/

function diff(arr1, arr2) {
  var unique1 = arr1.filter(function(a, i) {
    return arr1.indexOf(a) === i && arr2.indexOf(a) < 0;
  });
  var unique2 = arr2.filter(function(a, i) {
    return arr2.indexOf(a) === i && arr1.indexOf(a) < 0;
  });
  return unique1.concat(unique2);
}

function sym(args) {
  var arrArgs = Array.prototype.slice.call(arguments);
  if (arrArgs.length === 1) {
    var result = arrArgs[0].filter(function(x, i) {
      return arrArgs[0].indexOf(x) === i;
    });
  } else {
    var result = arrArgs.reduce(function(x, y) {
      return diff(x, y);
    });
  }

  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([1, 1]);
