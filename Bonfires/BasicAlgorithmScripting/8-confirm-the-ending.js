/*
Check if a string (first argument) ends with the given target string (second
argument).

Here are some helpful links:
String.substr()
*/

function end(str, target) {
  var tLen = target.length;
  return str.substr(-tLen, tLen) === target;
}

end('Bastian', 'n');
