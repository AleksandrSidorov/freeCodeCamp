/*
Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello'
does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in
'line' are present in 'Alien'.

Here are some helpful links:
Array.indexOf()
*/

function mutation(arr) {
  for (var i in arr[1]) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0) return false;
  }
  return true;
}

mutation(['hello', 'hey']);
mutation(['hello', 'Hello']);
mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);
mutation(['Mary', 'Army']);
mutation(['Mary', 'Aarmy']);
mutation(['Alien', 'line']);
mutation(['floor', 'for']);
mutation(['hello', 'neo']);
