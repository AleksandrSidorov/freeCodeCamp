/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
The provided number may not be a prime.

Here are some helpful links:

For Loops
Array.push()
*/

function isPrime(number) {
  var count = 0;
  for (var i = 2; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
}

function sumPrimes(num) {
  var resultArr = [];
  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      resultArr.push(j);
    }
  }
  return resultArr.reduce(function (a,b) {
    return a + b;
  });
}

sumPrimes(10);
