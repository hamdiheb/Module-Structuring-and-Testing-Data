function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
//The index variable updates during the call through the while loop and the condition , if the condition is true the variable will be updated till is false

// b) What is the if statement used to check
//if statment is used to check if the index value is less than the str.length value

// c) Why is index++ being used?
// index++ is used to increase the index variable value

// d) What is the condition index < str.length used for?
// index < str.length condition is to check index variable value is less than str.length or not

