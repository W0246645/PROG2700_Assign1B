// Question 4	
// Write a JavaScript program to iterate through an array of ten(10) positive randomly generated numbers.
// Each number will then be checked to see if it’s a prime number.
// •	Sample Expected output (console.log()).
// 23-yes, 15-no, 22-no, 124-no, 11-yes, 9-no, 2-yes, 13-yes, 5-yes, 1-no

function randomNumArray(max) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array
}

/**
@param {array} array
*/
function areNumsPrime(array) {
    let output = ""
    
    array.forEach(num => {
        output += num + "-" + isPrime(num)
    });
    return output;
}

function isPrime(num) {
    let start = 2;
    const limit = Math.sqrt(num);
    while (start <= limit) {
        if (num % start++ < 1) {
            return "no, ";
        }
    }
    return "yes, ";
}

let array = randomNumArray(1000)

console.log(areNumsPrime(array));