const repeatString = function (string, num) {
  let toReturn = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    toReturn += string;
  }
  return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
