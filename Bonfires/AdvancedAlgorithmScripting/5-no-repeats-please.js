/*
Return the number of total permutations of the provided string that don't have
repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but
only 2 of them don't have the same letter (in this case 'a') repeating.

Here are some helpful links:
Permutations
RegExp
*/

function permAlone(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here
        chars = []          //collection for each recursion level
    ;
    //---------------------
    //split words or numbers into an array of characters
    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    permutate(chars);
    console.log(permutations, permutations.length); 
    return permutations;
    //===========UNDER THE HOOD===========
    function permutate(chars){ //recursive: generates the permutations
        if(chars.length === 0)permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());  //rotate the characters
            nextWord.push(chars[0]);    //use the first char in the array
            permutate(chars.slice(1));  //Recurse: array-less-one-char
            nextWord.pop();             //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============
permAlone('aab');
