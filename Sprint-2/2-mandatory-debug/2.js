// the function should return one last digit , but we are passing any parameter variable to the function and we are passing const number

// Predict the output of the following code:
//always will be 3 
// =============> Write your prediction here

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// when we defined the function we didn't define variable to the parameter that store the input when we are calling the function, and we are using num which is const variable defined 
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here
let num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
