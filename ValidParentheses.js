// https://www.codewars.com/kata/valid-parentheses

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
  let str = parens;
  while(str.indexOf('()') !== -1){
    str = str.replace('()', '');
  }

  return str.length === 0;
}