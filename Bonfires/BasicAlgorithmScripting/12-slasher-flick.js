/*
Return the remaining elements of an array after chopping off n elements from
the head.

Here are some helpful links:
Array.slice()
Array.splice()
*/

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
