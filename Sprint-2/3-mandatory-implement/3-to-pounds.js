// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/*const penceString = "399p"; //initialises a string variable with the value "399p"

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
console.log(`£${pounds}.${pence}`);*/

function topound(penceString){

    const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); //This variable will have value of 399


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //This variable will have value of 399 without adding any 0 because target length already 3

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // This variable value will be 3


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)//Here we will copy last 99
  .padEnd(2, "0"); //padend function will not works because target length already 2
  return `£${pounds}.${pence}`;
}

console.log(topound("399p"));