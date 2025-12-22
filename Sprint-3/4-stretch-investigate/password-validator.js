function checkpwdLength(password) {
    if(password.length < 5) {
        return false;
    }
    else{
        return true;
    }
}

function findupperCase(password) {
    if (password.search(/[A-Z]/) >= 0) {
        return true;
    }

    else {
        return false;
    }
}

function findlowerCase(password) {
    if (password.search(/[a-z]/) >= 0){
        return true;
    }
    else{
        return false;
    }

}

function findNumber(password) {
    if (password.search(/[0-9]/) >= 0){
        return true;
    }
    else{
        return false;
    }

}

function findSymbol(password) {
    if(password.search(/\W/) >= 0){ // \w regix usually will show any caractere but to search for any caractere not letter we use upper W regix
        return true;
    }
    else{
        return false;
    }
}

function passwordValidator(password) {
    // if(checkpwdLength(password) == false){
    //     return `Password Length is less than 5`; 
    // }
    // else if (findupperCase(password) == false){
    //     return `Password should have uppercase`;
    // }
    // else if (findlowerCase(password) == false){
    //     return `Password should have lowercase`;
    // }
    // else if (findNumber(password) == false){
    //     return `Password should have a number`;
    // }
    // else if (findSymbol(password) == false){
    //     return `Password should have a symbol`;
    // }
    // else{
    //     return `Password is Good`;
    // }

    if((checkpwdLength(password) == true) && (findupperCase(password) == true) && (findlowerCase(password) == true) && (findNumber(password) == true) && (findSymbol(password) == true)){
        return true;
    }
    else {
        return false;
    }
}

console.log(passwordValidator("Abcdeedf1!"));
// - Have at least 5 characters. == function checkpwdLength
// - Have at least one English uppercase letter (A-Z) == function findupperCase
// - Have at least one English lowercase letter (a-z) == function findlowerCase
// - Have at least one number (0-9) == function findNumber
// - Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&") == findSymbol
// - Must not be any previous password in the passwords array. 

module.exports = passwordValidator;