// Here we have a function that convert decimal number to percentage

// Why will an error occur when this program runs?
// =============> Because a global variable is being declared again inside a function and we are not calling the function on the console.log

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}*/
//console.log(decimalNumber);
// =============> Because a global variable is being declared again inside a function and we are not calling the function on the console.log

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());