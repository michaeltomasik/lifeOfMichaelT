// https://www.codewars.com/kata/find-the-odd-int/

// Description:
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(numberArr) {
  const numberDict = {};
  for (let i = 0; i < numberArr.length; i++) {
    const number = numberArr[i];
    numberDict[number] = numberDict[number] ? (numberDict[number] + 1) : 1;
  }
  let oddNumber = 0;
  for (let key in numberDict) {
    oddNumber = numberDict[key] % 2 ? key : oddNumber;
  };
  
  return parseInt(oddNumber);
}