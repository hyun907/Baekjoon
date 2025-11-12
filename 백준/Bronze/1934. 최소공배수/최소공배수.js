const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...num] = input;
const answer = [];

// 최대공약수
function lcm(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// 최소공배수
function gcd(a, b) {
    return a * b / lcm(a, b);
}

for (let i = 0; i < num.length; i++){
    const [a, b] = num[i].split(" ");
    answer.push(gcd(a, b));
}

console.log(answer.join("\n"))