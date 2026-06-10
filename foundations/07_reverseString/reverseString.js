const reverseString = function(reverse) {

    let backwards = "";

    for (let i = reverse.length - 1; i >= 0; i--) {
        backwards = backwards + reverse[i];                
    }

    return backwards;

};

// Do not edit below this line
module.exports = reverseString;
