/*
Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words
like 'the' and 'of'.

Here are some helpful links:
String.charAt()
*/

function titleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {return a.toUpperCase()});
};

titleCase("I'm a little tea pot");
