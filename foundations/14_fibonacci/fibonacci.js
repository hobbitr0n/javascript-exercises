const fibonacci = function(a) {

    const num = Number(a);

    console.log(num);

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0)  {
        return 0;
    }

    let fib = [1, 1];

    for (let i = 0; i < (num - 1); i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }

    console.log(fib[num - 1]);
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
