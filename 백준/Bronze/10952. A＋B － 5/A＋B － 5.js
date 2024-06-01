const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4', '9 8', '5 2', '0 0']

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0]) + Number(numbers[1]));
}