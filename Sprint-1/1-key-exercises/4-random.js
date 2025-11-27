const minimum = 1;
const maximum = 100;

let random_number=Math.random();
const num = Math.floor(random_number * (maximum - minimum + 1)) + minimum;

console.log(`Our random number is ${random_number} and if we multiply it by ${maximum+minimum+1} it will be = ${random_number * (maximum - minimum +1) + minimum} and the closest down round is ${num}`);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//Num represent integer number round between 1 and 100