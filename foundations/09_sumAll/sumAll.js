const sumAll = function(one, two) {
    if (one < 0 || two < 0) {
        return 'ERROR';
    }

    let ray = [];
    let range = Math.abs(one - two);

    // Setup ray before totalling everything up

    for (let i = 0; i <= range; i++) {
        
    }



    // Then break apart ray to add values together



    if (two > one) {
        for (let i = 0; i < dif; i++) {
            ray.push(one + i);
        }

    }

    if (one > two) {
        result = two;
        for (let i = 0; i <= range; i++) {
            result += i;
        }

    }


    console.log(ray);
    return result;

};

// Do not edit below this line
module.exports = sumAll;
