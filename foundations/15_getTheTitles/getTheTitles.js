const getTheTitles = function(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        result[i] = books[i].title;
        console.log(result);
    }
    console.log(typeof books);
    console.log(typeof result);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
