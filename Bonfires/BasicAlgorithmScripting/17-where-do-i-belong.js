/*
Return the lowest index at which a value (second argument) should be inserted
into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1
(0th index), but less than 2 (1st index).

Here are some helpful links:
Array.sort()
*/

function where(arr, num) {
var sortedArr = arr.sort();
  for (var i in sortedArr) {
    if (num <= sortedArr[i]) return sortedArr.indexOf(sortedArr[i]);
  }
  return "Nothing there";
}

where([40, 60], 50);
where([10, 20, 30, 40, 50], 30);
