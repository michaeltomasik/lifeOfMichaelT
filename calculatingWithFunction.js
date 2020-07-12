// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// Examples
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function executeValue(callback) { return typeof callback === 'function' ? callback(value) : value }
function zero(callback) {
  const value = 0;
  return executeValue(callback);
}
function one(callback) {
  const value = 1;
  return executeValue(callback);
}
function two(callback) {
  const value = 2;
  return executeValue(callback);
}
function three(callback) {
  const value = 3;
  return executeValue(callback);
}
function four(callback) {
  const value = 4;
  return executeValue(callback);
}
function five(callback) {
  const value = 5;
  return executeValue(callback);
}
function six(callback) {
  const value = 6;
  return executeValue(callback);
}
function seven(callback) {
  const value = 7;
  return executeValue(callback);
}
function eight(callback) {
  const value = 8;
  return executeValue(callback);
}
function nine(callback) {
  const value = 9;
  return executeValue(callback);
}

function plus(a) {
  return (b) => {
    return a + b
  }
}
function minus(a) {
  return (b) => {
    return b - a
  }
}
function times(a) {
  return (b) => {
    return a * b
  }
}
function dividedBy(a) {
  return (b) => {
    return Math.floor(b/a)
  }
}
