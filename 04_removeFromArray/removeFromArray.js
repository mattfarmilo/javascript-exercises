const removeFromArray = function(arr, ...elements) {
  for (const element of elements) {
    function findItem(item) {
      return item === element;
    }
    if (arr.findIndex(findItem) >= 0) {
      const discard = arr.splice(arr.findIndex(findItem), 1)
    }
  }
  
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
