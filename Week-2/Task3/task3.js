function checkEvenOdd(n) {
    let result = (n % 2 === 0) ? "Even" : "Odd";
    return result;
}

// Example usage
let n = 7; // Change this number to test
let result = checkEvenOdd(n);
console.log(`The number ${n} is ${result}.`);
