/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.

Here are some helpful links:
Arguments object
Array.filter()
*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  var result = arguments[0].filter(function(a) {
    return args.indexOf(a) < 0;
  });
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(['tree', 'hamburger', 53], 'tree', 53);
