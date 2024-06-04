const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// ["5", "20 10 35 30 7"]

let arr = input[1].split(' ').map(e => Number(e));
// [20, 10, 35, 30, 7]

const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);

console.log(minValue + " " + maxValue);