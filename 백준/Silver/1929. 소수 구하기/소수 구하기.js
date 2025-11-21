const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map(Number);

function sieve (a, b) {
    const isPrime = Array(b + 1).fill(true);

    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= b; i++) {
        if (isPrime[i]) {
            for (let j = i *i; j <= b; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = a; i <= b; i++) {
        if (isPrime[i]) primes.push(i);
    }

    return primes;
} 

console.log(sieve(a, b).join("\n"));