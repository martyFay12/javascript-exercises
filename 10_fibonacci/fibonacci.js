const fibonacci = function (num) {
  if (typeof num !== "number") num = Number(num);
  if (num < 1) return "OOPS";
  sequence = [1, 1];
  let index = 0;
  let sum;
  while (num - index++ > 2) {
    sum = sequence.reduce((total, current) => total + current, 0);
    sequence[0] = sequence[1];
    sequence[1] = sum;
  }
  return sequence[num - index];
};

// Do not edit below this line
module.exports = fibonacci;
