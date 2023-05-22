const findTheOldest = function(arr) {
  return arr.reduce((a, b) => {
    const date = new Date()
    const year = date.getFullYear();
    
    const aAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : year - a.yearOfBirth;

    const bAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : year - b.yearOfBirth;
    
    const oldest = aAge > bAge ? a : b;
    return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
