/*
Return the number of total permutations of the provided string that don't have
repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but
only 2 of them don't have the same letter (in this case 'a') repeating.

Here are some helpful links:
Permutations
RegExp
*/

function permAlone(str) {
  var result = 0;
  var myRe = /(\w)\1/i;

  permArr = [];
  usedChars = [];

  var arrPerm = permute(str);

  for (var i = 0; i < arrPerm.length; i++) {
    var el = arrPerm[i].join('');
    if (!myRe.test(el)) {
      result += 1;
    }
  }
  return result;
}

var permArr = [];
var usedChars = [];

function permute(input) {
  var i, ch;

  if (typeof input === 'string') {
    input = input.split('');
  }

  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}
//var assa = permute('aab');
var assa = permAlone('aaabb');
console.log(assa);
