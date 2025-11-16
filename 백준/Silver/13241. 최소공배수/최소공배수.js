const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function lcm(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function gcd(a, b) {
    return a * b / lcm(a, b)
}

console.log(gcd(a, b))