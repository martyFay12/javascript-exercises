const removeFromArray = function (args) {
  arrayArgs = [...arguments];
  let arrayToMuddle = arrayArgs[0];
  const elementsToRemove = arrayArgs.slice(1);
  let originalLength = arrayToMuddle.length;
  for (element of elementsToRemove) {
    for (let i = 0; i < originalLength; i++) {
      if (arrayToMuddle[i] === element) {
        originalLength--;
        arrayToMuddle.splice(i--, 1);
      }
    }
  }
  console.log(arrayToMuddle);
  return arrayToMuddle;
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
