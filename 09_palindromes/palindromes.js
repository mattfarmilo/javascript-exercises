const palindromes = function (string) {
  const newString = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .toLowerCase()
    .replaceAll(' ', '');
  
  const revString = newString.split('').reverse().join('');

  return revString === newString;

};

// Do not edit below this line
module.exports = palindromes;
