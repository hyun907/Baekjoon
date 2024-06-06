const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map(Number);

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);
console.log(max);
console.log(maxIndex + 1);