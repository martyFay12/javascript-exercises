const palindromes = function (string) {
  const punctuationless = string
    .replace(/[.,\/#!$%\^?&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{1,}/g, "")
    .toLowerCase();
  const array = punctuationless.split("");
  const reversedArray = [...array].reverse();
  return array.every((value, index) => value === reversedArray[index]);
};
// Do not edit below this line
module.exports = palindromes;
