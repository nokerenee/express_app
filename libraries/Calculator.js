// Exercise 6: 

const Logger = require('./Logger');

class Calculator {
  constructor() {
    this.id = this.generateRandomId();
    this.logger = new Logger();
  }

  generateRandomId() {
    // Generate a random number and convert it to a string
    return Math.round(Math.random() * 100);
  }

  log(message) {
    return this.logger.log(this.id, message);
  }

  add(num1, num2) {
    const value = num1 + num2;
    this.log(`Addition Result: ${value}`);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.log(`Subtraction Result: ${value}`);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.log(`Multiplication Result: ${value}`);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.log(`Division Result: ${value}`);
    return value;
  }
}

module.exports = Calculator;
