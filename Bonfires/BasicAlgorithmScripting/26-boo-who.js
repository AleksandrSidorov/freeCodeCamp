/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Here are some helpful links:

Boolean Objects
*/

function boo(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

boo(null);
