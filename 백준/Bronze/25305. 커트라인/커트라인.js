const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0].split(" ")[0]);
const k = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr[arr.length - k]);