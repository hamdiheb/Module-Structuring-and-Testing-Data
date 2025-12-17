function getOrdinalNumber(num) {
 let num_char = num.toString();

    if(num_char[num_char.length-1] === "1"){
        return `${num_char}st`
    }

    else if(num_char[num_char.length-1] === "2"){
        return `${num_char}nd`;
    }

    else if(num_char[num_char.length-1] === "3"){
        return `${num_char}rd`;
    }

    else {
        return `${num_char}th`;
    }
}

module.exports = getOrdinalNumber;