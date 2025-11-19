const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...num] = input.map(Number);

function isPrime (number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    
    for (let i = 3; i * i <= number; i+=2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const answer = [];

for (let i = 0; i < num.length; i++) {
    let candidate = num[i];
    
    if (isPrime(num[i])) {
        answer.push(num[i]);
    }
    
    while (!isPrime(candidate)) {
        candidate ++;
        if (isPrime(candidate)) {
            answer.push(candidate);
        }
        
    }    
}

console.log(answer.join("\n"));