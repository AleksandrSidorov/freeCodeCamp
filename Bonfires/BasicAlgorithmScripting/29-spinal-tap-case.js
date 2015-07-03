/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:

RegExp
String.replace()
*/

function spinalCase(str) {
  return str.replace(/[ _]/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

spinalCase('This Is Spinal Tap');
