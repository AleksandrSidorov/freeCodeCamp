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
  var results = [];

  function perm(input, memo) {
    var cur, memo = memo || "";

    for (var i = 0; i < input.length; i++) {
      cur = input.substring(i);
      if (input.length === 0) {
        results.push(memo + cur);
      }
      perm(input.slice(0), memo + cur);
      input = input.slice(0, i) + (cur[0] || "") + input.slice(i);
    }

    return results;
  }

  return perm(str);
}

permAlone('aab');
