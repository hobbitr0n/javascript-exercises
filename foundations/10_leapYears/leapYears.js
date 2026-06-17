const leapYears = function(year) {
    
    // Divisible Constants
    const divFour = year / 4;
    const divHundred = year / 100;
    const divFourHundred = year / 400;

    if (Number.isInteger(divHundred) && !Number.isInteger(divFourHundred)) {
        return false;
    }

    if (Number.isInteger(divFour)) {
        return true;
    }
    return false;
    
};

// Do not edit below this line
module.exports = leapYears;
