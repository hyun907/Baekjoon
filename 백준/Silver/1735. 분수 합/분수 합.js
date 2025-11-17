const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const [c, d] = input[1].split(" ").map(Number); 

// 최대공약수(gcd)
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

let numerator = a * d + c * b;
let denominator = b * d;

const g = gcd(numerator, denominator);

numerator /= g;
denominator /= g;

console.log(numerator + " " + denominator);