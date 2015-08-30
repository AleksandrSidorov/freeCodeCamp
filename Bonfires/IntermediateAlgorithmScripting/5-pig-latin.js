/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/

function translate(str) {
  var result = '';
  var wowels = "aeiou";
  var wowelsArr = [];
  var firstWowel = 1;
  if (/^[aeiou]/i.test(str) === true) {
    return str + 'way';
  } else {
    for (var i in wowels) {
      if (str.indexOf(wowels[i]) > 0) {
        wowelsArr.push(str.indexOf(wowels[i]));
      }
    }
    wowelsArr.sort();
    firstWowel = wowelsArr[0];
    return str.slice(firstWowel) + str.slice(0,firstWowel) + 'ay';
  }
}
translate("brconsonant");
