const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = input.split("").map(Number);
const sortedNum = num.sort((a, b) => b - a);

console.log(sortedNum.join(""));