// https://www.codewars.com/kata/multiples-of-3-or-5

// Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  let sum = 0;

  for (let currentNum = 0; currentNum < number; currentNum++) {
    const multipleOf3 = currentNum % 3 === 0;
    const multipleOf5 = currentNum % 5 === 0;
    
    sum = multipleOf3 || multipleOf5 ? (currentNum + sum) : sum;
  }
  return sum;
}