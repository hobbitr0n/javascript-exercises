const removeFromArray = function(array, ...picker) {
    let result = [];
    let options = [];
    options = picker;

    for (let i = 0; i < array.length; i++) {
        if (!picker.includes(array[i])) {
            result.push(array[i]);
        }
    }
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
