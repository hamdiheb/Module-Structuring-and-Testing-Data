const penceString = "399p"; //initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); //This variable will have value of 399
console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //This variable will have value of 399 without adding any 0 because target length already 3
console.log(paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // This variable value will be 3
console.log(pounds);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)//Here we will copy last 99
  .padEnd(2, "0"); //padend function will not works because target length already 2
console.log(pence);
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
