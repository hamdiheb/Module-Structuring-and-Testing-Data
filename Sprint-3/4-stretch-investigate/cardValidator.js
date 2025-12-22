function digitCheck(cc_num) {
    let checknun=true;
    if(cc_num.length < 16){
        return "Card length must be superior to 16";
    }
    else{
        for(let i=0;i<cc_num.length;i++){
            if(!isNaN(cc_num[i]) == false){
               checknun=false;
            }
        }
        if(checknun == false){
            return "Card should have only numbers";
        }
        else{
            return "Card Digit Check Passed";
        }
    }
}

function twoDifferent(cc_num) {
    let equal=true;
    for (let i=0;i<cc_num.length-1;i++){
        if(cc_num[i] != cc_num[i+1]){
            equal=false;
        }
    }
    if(equal == true){
        return `Card digits should have at least 2 different digits`;
    }
    else{
        return `Card digits fine`;
    }
}

function lastEven(cc_num) {
    let lastDigNum=Number(cc_num[cc_num.length-1]);
    if(lastDigNum % 2 == 0){
        return `Good`;
    }
    else{
        return `Last digit should be even`;
    } 
}

function digitSum(cc_num) {
    let digitSum=0;
    for(let i=0;i<cc_num.length;i++){
        digitSum=digitSum+Number(cc_num[i]);
    }
    if(digitSum < 17){
        return `Sum of digits should be greater to 16`;
    }
    else {
        return `Sum of digits is good`
    }
}

function cardValidator(cc_num) {
    if(digitCheck(cc_num) == "Card length must be superior to 16" || digitCheck(cc_num) == "Card should have only numbers"){
        //return "Check Card digit , Card digits Should be superior to 16 and should have only Numbers";
        return false;
    }
    else if (twoDifferent(cc_num) == "Card digits should have at least 2 different digits"){
        //return "Check Card digits , Card digits should have at least 2 different digits";
        return false;
    }
    else if (lastEven(cc_num) == "Last digit should be even"){
        //return "Check your card last digit , should be even digit";
        return false;
    }
    else if(digitSum(cc_num) == "Sum of digits should be greater to 16"){
        //return "Check your card digits , sum of your card digits should be greate to 16";
        return false;
    }
    else{
        //return "Your card is accepted to continue";
        return true;
    }
}

console.log(cardValidator("1111111111111112"));

//Number must be 16 digits, all of them must be numbers. == function digitCheck
//You must have at least two different digits represented (all of the digits cannot be the same). == function twoDifferent
//The final digit must be even. == function lastEvent
//The sum of all the digits must be greater than 16. == function digitSum