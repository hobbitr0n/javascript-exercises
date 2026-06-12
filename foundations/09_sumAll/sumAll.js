const sumAll = function(one, two) {
    if (!Number.isInteger(one) || !Number.isInteger(two) || one < 0 || two < 0) {
        return 'ERROR';
    }

    let low = 0;
    let high = 0;
    let result = 0;
    let numArray = [];

    if (two > one) {
        low = one;
        high = two;
    } else {
        low = two;
        high = one;
    }

    const range = (high - low);

    console.log(range);
    console.log(one);
    console.log(two);

    for (let i = 0; i <= range; i++) {
        numArray.push(low);
        low++;
    }

    console.log(numArray);

    for (let i = 0; i < numArray.length; i++) {
        result += numArray[i];
    }

    console.log(result);
    return result;


};

// Do not edit below this line
module.exports = sumAll;
