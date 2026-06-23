const findTheOldest = function(array) {
    const today = new Date();
    let age = [];
    let oldest = 0;
    let person = 0;

    for (let i = 0; i < array.length; i++)  {
        if (array[i].yearOfDeath === undefined) {
            age[i] = today.getFullYear() - array[i].yearOfBirth;
        } else {
            age[i] = array[i].yearOfDeath - array[i].yearOfBirth;
        }
    }

    for (let i = 0; i < age.length; i++)    {
        if (age[i] > oldest)    {
            oldest = age[i];
            person = i;
        }
    }

    return array[person]; 
};

// Do not edit below this line
module.exports = findTheOldest;
