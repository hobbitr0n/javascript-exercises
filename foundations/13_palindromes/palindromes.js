const palindromes = function (word) {

    const filter = [" ", "", ",", ".", "!"];
    let wordless = "";
    let wordlessReversed = "";

    for (let i = 0; i < word.length; i++)   {
        if (!filter.includes(word[i]))
            wordless += word[i];
    }
    
    for (let i = wordless.length; i > 0; i--)   {
        wordlessReversed += wordless[i - 1];
    }

    console.log(word);
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
