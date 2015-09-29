/*
Compare and update inventory stored in a 2d array against a second 2d array of
a fresh delivery. Update current inventory item quantity, and if an item cannot
be found, add the new item and quantity into the inventory array in
alphabetical order.

Here are some helpful links:
Global Array Object
*/

function sort2d(arr) {
  return arr.sort(function(a, b) {
    return a[1].localeCompare(b[1]);
  });
}

function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  if (arr1.length === 0) {
    return sort2d(arr2);
  }

  var flat1 = arr1.reduce(function(a, b) {
    return a.concat(b);
  });


  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i][1] === arr1[j][1]) {
        arr1[j][0] += arr2[i][0];
        break;
      }
    }
    if (flat1.indexOf(arr2[i][1]) === -1) {
      arr1.push(arr2[i]);
    }
  }

  return sort2d(arr1);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
