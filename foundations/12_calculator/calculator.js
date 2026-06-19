const add = function(num1, num2) {
  const result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
  const result = num1 - num2;
  return result;
};

const sum = function(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++)	{
    result += numbers[i];
  }
  return result;
numbers};

const multiply = function(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++)  {
    result = result * numbers[i];
  }
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(number) {
  let result = number;
  if (number === 0) {
    return 1;
  }
  for (let i = 1; i < number; i++)  {
    result = result * (number - i);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
