const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce(
    (acc, cur) => acc + cur, 0
  );
};

const multiply = function(arr) {
  return arr.reduce(
    (acc, cur) => acc * cur
  );
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	let result = 1;
  
  if (num !== 0) {
    for (i = 1; i<=num; i++) {
      result *= i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
