function diff(arr1, arr2) {
  var newArr = [];
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var j in arr2) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

// After some time
function diff_v2(arr1, arr2) {
  var newArr = [];
  var unique1 = arr1.filter(function(a) {
    return arr2.indexOf(a) < 0;
  });
  var unique2 = arr2.filter(function(a) {
    return arr1.indexOf(a) < 0;
  });
  newArr = newArr.concat(unique1).concat(unique2);

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
