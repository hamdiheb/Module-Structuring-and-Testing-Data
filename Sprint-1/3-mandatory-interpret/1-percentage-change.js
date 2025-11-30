let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//We have called function number twice , line 4 and line 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//line 5 replaceall method doesn't have the correct paramter as comma is missing 

// c) Identify all the lines that are variable reassignment statements
//line 4 and 5 are variable reassignment 

// d) Identify all the lines that are variable declarations
//line 1,2,7 and 8 are lines for variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//replaceall method replace the existent variable with different variable given on paramter for both