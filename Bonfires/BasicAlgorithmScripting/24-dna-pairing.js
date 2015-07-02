/*
The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.

Here are some helpful links:

Array.push()
String.split()
*/

function pair(str) {
  var strArr = str.split('');
  for (var i in strArr) {
    switch(strArr[i]) {
      case 'A':
        strArr[i] += 'T';
        strArr[i] = strArr[i].split('');
        break;
      case 'T':
        strArr[i] += 'A';
        strArr[i] = strArr[i].split('');
        break;
      case 'C':
        strArr[i] += 'G';
        strArr[i] = strArr[i].split('');
        break;
      case 'G':
        strArr[i] += 'C';
        strArr[i] = strArr[i].split('');
        break;
      default:
        break;
    }
  }
 return strArr;
}

pair("GCG");
