// Function to perform calculations
async function calculate(operator) {
  // Get the values from input fields
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);

  // Check if the inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Call the fetchfunction to perform the calculation
    let result = await fetchfunction(operator, num1, num2);
    // Display the result in the result input field
    document.getElementById("result").value = result;
  } else {
    // Display an error message if inputs are not valid numbers
    document.getElementById("result").value = "Invalid input";
  }
}

// Function to handle the asynchronous fetch operation
async function fetchfunction(operator, num1, num2) {
  // Convert the operator to the corresponding string used in the server route
  let operatorString;
  switch (operator) {
    case "+":
      operatorString = "add";
      break;
    case "-":
      operatorString = "subtract";
      break;
    case "/":
      operatorString = "divide";
      break;
    case "*":
      operatorString = "multiply";
      break;
    default:
      operatorString = "Invalid operator";
  }

  // Construct the URL for the server API
  const url = `/calculator/${operatorString}?num1=${num1}&num2=${num2}`;

  // Use fetch to make an asynchronous request to the server
  const result = await fetch(url)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      return data.result; // Extract the result from the data
    })
    .catch((error) => {
      console.error("Error during calculation:", error);
    });
  return result; // Return the result of the calculation
}

// Function to clear input fields and result
function clearResult() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("result").value = "";
}
