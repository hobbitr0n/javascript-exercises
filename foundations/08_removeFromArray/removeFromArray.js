const removeFromArray = function(array, picker) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== picker) {
            result.push(array[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
