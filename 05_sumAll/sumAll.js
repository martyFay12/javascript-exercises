const sumAll = function (int1, int2) {
  if (typeof int1 != "number" || typeof int2 != "number") {
    return "ERROR";
  }
  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  }
  if (int1 === int2) {
    return int1;
  }
  let sum = 0;
  let largerInt;
  let smallerInt;
  if (int1 > int2) {
    largerInt = int1;
    smallerInt = int2;
  } else {
    largerInt = int2;
    smallerInt = int1;
  }
  while (largerInt > smallerInt) {
    sum += largerInt-- + smallerInt++;
  }
  if (largerInt === smallerInt) {
    sum += largerInt;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
