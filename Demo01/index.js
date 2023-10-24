const readlineSync = require('readline-sync');

const num1 = readlineSync.question('Enter first number: ');
const num2 = readlineSync.question('Enter second number: ');
const operator = readlineSync.question('Enter operator (+, -, *, /): ');

let result;

switch (operator) {
  case '+':
    result = parseFloat(num1) + parseFloat(num2);
    break;
  case '-':
    result = parseFloat(num1) - parseFloat(num2);
    break;
  case '*':
    result = parseFloat(num1) * parseFloat(num2);
    break;
  case '/':
    result = parseFloat(num1) / parseFloat(num2);
    break;
  default:
    console.log('Invalid operator');
    return;
}

console.log(`Result: ${result}`);

