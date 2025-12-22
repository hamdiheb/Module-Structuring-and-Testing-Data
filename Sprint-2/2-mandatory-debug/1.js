// Predict and explain first...
//  =============> i think we will have syntax error 

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> we didn't have error but the function is not working because we are not returning as line 5 is closed by ;
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a+b;
}

console.log(`The sum of 10 and 32 is ${sum(10,32)}`);