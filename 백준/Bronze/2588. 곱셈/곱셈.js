const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[0].split('');
const b = input[1].split('');

const one = Number(input[0] * b[2]);
const two = Number(input[0] * b[1]);
const three = Number(input[0] * b[0]);
const four = one + two * 10 + three * 100

console.log(one);
console.log(two);
console.log(three);
console.log(four);
