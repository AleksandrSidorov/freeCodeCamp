/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Here are some helpful links:

Array.splice()
Array.indexOf()
Array.join()
*/

function convert(num) {
  var romanArr = [['','I','II','III','IV','V','VI','VII','VIII','IX'],
                  ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
                  ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']];
  var myNum = num.toString().split('').map(Number);
  var myLength = myNum.length;
  var resultArr = [];
  var thousands = '';
  var romanThousands = '';

  if (myLength > 3) {
    myLength = 3;
    thousands = myNum.slice(0, myNum.length - myLength).join('');
    romanThousands = Array(parseInt(thousands) + 1).join("M");
  }

  for (var i = 0; i < myLength; i++) {
    var digit = myNum.pop();
    resultArr.push(romanArr[i][digit]);
  }
  return romanThousands + resultArr.reverse().join('');
}
convert(36);
