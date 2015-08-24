/*
Return the sum of all indices of elements of 'arr' that can be paired with one
other element to form a sum that equals the value in the second argument 'arg'.
If multiple sums are possible, return the smallest sum. Once an element has
been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because
4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two
elements can be paired to equal 4, and the first element has an index of 0!

Here are some helpful links:

Array.reduce()
*/

function pairwise(arr, arg) {
  var myIndexes = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (myIndexes.indexOf(i) === -1 && myIndexes.indexOf(j) === -1 && arr[i] + arr[j] === arg) {
        myIndexes.push(i, j);
      }
    }
  }
  if (myIndexes.length === 0) {
    return 0;
  } else {
    return myIndexes.reduce(function(a, b) {
      return a + b;
    });
  }
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4)
pairwise([1,1,1], 2)
pairwise([0, 0, 0, 0, 1, 1], 1)
pairwise([], 100)
