const reverseString = function(string) {
  const array = string.split('');
  array.reverse();
  const revString = array.join('')
  return revString;
};

// Do not edit below this line
module.exports = reverseString;