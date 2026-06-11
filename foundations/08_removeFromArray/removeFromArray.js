const removeFromArray = function(array, ...picker) {
    let result = [];
    let options = [];
    options = picker;

    console.log(options);

    for (let i = 0; i < array.length; i++) {
        if (!picker.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
