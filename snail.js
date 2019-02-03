// https://www.codewars.com/kata/snail

// Description:
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
  let arr = array;
  let snailOutput = [];

  while(arr.length > 0) {
    // Take a first row amnd save it
    const firstRow = arr[0];
    snailOutput = snailOutput.concat(firstRow);
    // Remove firstRow
    arr.shift();
    // Rotate 90 degrees matrix
    if(arr[0]) {
      arr = arr[0].map((col, i) =>
        arr.map(row => row[row.length - 1 - i]));
    }
  }
  return snailOutput;
}