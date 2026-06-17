const leapYears = function(year) {
    // Divisible Constants
    const divFour = year / 4;
    const divHundred = year / 100;
    const divFourHundred = divHundred / 400;

    if (Number.isInteger(divFour) || Number.isInteger(divFourHundred)) {
        return true;
    }   else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
