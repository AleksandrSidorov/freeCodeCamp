/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function binaryAgent(str) {
  var resultStr = '';
  var myArr = str.split(' ');
  var result = myArr.forEach(function(element) {
    resultStr += String.fromCharCode(parseInt(element, 2));
  });
  return resultStr;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
