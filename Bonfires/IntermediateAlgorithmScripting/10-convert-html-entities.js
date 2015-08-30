/*
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

Here are some helpful links:

RegExp
HTML Entities
*/

function convert(str) {
  var result = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  return result;
}

convert('Dolce & Gabbana');
