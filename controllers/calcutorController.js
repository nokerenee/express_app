const Calculator = require("../libraries/Calculator");

let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let subtract = myCalc.subtract(number1, number2);
  res.status(200).json({ result: subtract });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let multiply = myCalc.multiply(number1, number2);
  res.status(200).json({ result: multiply });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (number2 !== 0) {
    let divide = myCalc.divide(number1, number2);
    res.status(200).json({ result: divide });
  } else {
    res.status(400).json({ error: "Cannot divide by zero" });
  }
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
