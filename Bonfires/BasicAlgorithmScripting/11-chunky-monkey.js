/*
Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a multidimensional array.

Here are some helpful links:
Array.push()
*/

function chunk(arr, size) {
  result = [];
  for (i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
