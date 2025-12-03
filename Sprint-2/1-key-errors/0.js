// Predict and explain first...
//  =============> This function should return first letter of the input string capitalised + second letter of the input string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

console.log(capitalise("iheb"));