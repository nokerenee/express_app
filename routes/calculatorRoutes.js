const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calcutorController");

// new route for adding two numbers
// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// functional add route performing addition on request parameters
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req, res);
});

router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req, res);
});

module.exports = router;

// parseInt – by default, get arguments are strings. In order to add two numbers, they need to be numbers. This is why we parse them.
// res.status - we use this to set the value to 200 (Complete), this is used to give extra info to developers.
// res.json – instead of send, we use this to send data in json format instead of just strings.
