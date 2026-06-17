const convertToCelsius = function(FahrenheitToCelsius) {
  const celsius = (( FahrenheitToCelsius - 32 ) * (5 / 9));
  const rounder = (Math.round(celsius * 10) / 10);
  return rounder;
};

const convertToFahrenheit = function(CelsiusToFahrenheit) {
  const fahrenheit = CelsiusToFahrenheit * (9 / 5) + 32;
  const rounder = (Math.round(fahrenheit * 10) / 10);
  return rounder;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
