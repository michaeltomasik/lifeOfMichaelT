// https://www.codewars.com/kata/highest-and-lowest/

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
  const numbersArr = numbers.split(' ');
  const min = Math.min(...numbersArr);
  const max = Math.max(...numbersArr);
  
  return max + ' ' + min;
}