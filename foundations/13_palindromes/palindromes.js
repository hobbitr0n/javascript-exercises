const palindromes = function (word) {

    const cases = word.toLowerCase();
    const filter = [" ", "", ",", ".", "!"];
    let wordless = "";
    let wordlessReversed = "";

    for (let i = 0; i < cases.length; i++)   {
        if (!filter.includes(cases[i]))
            wordless += cases[i];
    }
    
    for (let i = wordless.length; i > 0; i--)   {
        wordlessReversed += wordless[i - 1];
    }

    console.log(cases);
    console.log(wordless);
    console.log(wordlessReversed);


    if (wordless === wordlessReversed)  {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
