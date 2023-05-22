const sumAll = function(a, b) {
  let arr = [];

  let start = a < b ? a : b;
  const end = a < b ? b : a;

  if (typeof start === 'number' && typeof end === 'number' && start >= 0) {
    for (start; start<=end; start++) {
      arr.push(start);
    }
    return arr.reduce(
      (acc, cur) => acc + cur
    );
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
