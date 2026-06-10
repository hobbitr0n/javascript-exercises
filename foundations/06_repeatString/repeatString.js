const repeatString = function (word, times) {
    let result = "";
    if (times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
        result += word;
    };
    console.log(result);
    return result;

    // for (let i = 0; i < times; i++) {
    //     result += word;
    // };
    // console.log(result);
    // return result;
};

// Do not edit below this line
module.exports = repeatString;
