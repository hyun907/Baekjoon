const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
console.log(a + b + c);