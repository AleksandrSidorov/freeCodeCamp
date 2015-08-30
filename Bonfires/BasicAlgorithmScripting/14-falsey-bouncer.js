/*
Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
Boolean Objects
Array.filter()
*/

function bouncer(arr) {
  var falsey = [false, null, 0, '', undefined, NaN];
  return arr.filter(function(a) {
    return falsey.indexOf(a) < 0;
  });
}

bouncer([7, 'ate', '', false, 9]);
bouncer(['a', 'b', 'c']);
bouncer([false, null, 0])
