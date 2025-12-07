// Predict and explain first...
//  =============> This function should return first letter of the input string capitalised + from second letter of the input string till the end using slice function

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// ==============>

function capitalise(str) {
  //let str_final = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str_final;

  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> str variable is input that has been declared in the function parameter, we can not redeclare a parameter variable 
// =============> we can declare new variable to receive the final result or not declare again the variable and return directly

console.log(capitalise("iheb"));