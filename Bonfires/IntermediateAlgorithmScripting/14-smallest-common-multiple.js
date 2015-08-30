/*
Find the smallest number that is evenly divisible by all numbers in the provided range.
The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function gcd(a, b){
    var t;
    while (b !== 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b){
    return (a * b / gcd(a, b));
}

function lcmm(args){
    if(args.length == 2){
        return lcm(args[0], args[1]);
    } else {
        var arg0 = args[0];
        args.shift();
        return lcm(arg0, lcmm(args));
    }
}

function smallestCommons(arr) {
  var sortedArr = arr.sort();
  var myArr = [];
  for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
    myArr.push(i);
  }
  return lcmm(myArr);
}


smallestCommons([1,5]);
