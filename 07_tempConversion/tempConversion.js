const convertToCelsius = function (temp) {
  return typeof temp != "number"
    ? "ERROR"
    : Math.round(((temp - 32) * 50) / 9) / 10;
};

const convertToFahrenheit = function (temp) {
  return typeof temp != "number"
    ? "ERROR"
    : Math.round(((temp * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
