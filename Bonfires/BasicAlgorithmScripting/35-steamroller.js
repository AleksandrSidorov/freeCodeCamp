/*
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:

Array.isArray()
*/

function steamroller(arr) {
  var result = [];
  var flattenRecursion = function(myArr) {
    myArr.forEach(function(element) {
      if (Array.isArray(element)) {
        flattenRecursion(element);
      } else {
        result.push(element);
      }
    });
  };
  flattenRecursion(arr);
  return result;
}

steamroller([1, [2], [3, [[4]]]]);
