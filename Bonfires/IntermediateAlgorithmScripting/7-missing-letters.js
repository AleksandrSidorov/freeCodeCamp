/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var result;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      result = String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return result;
}

fearNotLetter('abce');
