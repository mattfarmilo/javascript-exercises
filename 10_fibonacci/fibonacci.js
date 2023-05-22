const fibonacci = function(num) {
  let first = 1;
  let second = 1;
  let result;

  if (num <0) {
    result = "OOPS"
  } else if (num < 3) {
    result = 1;
  } else {
    for (let i=3; i<=num; i++) {
      result = first + second;
      first = second;
      second = result;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
