function repeat(str, count) {
    if(count < 0) {
        return "Count can't be negative";
    }else {
    return str.repeat(count);}
}

module.exports = repeat;