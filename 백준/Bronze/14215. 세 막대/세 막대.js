const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sortedInput = input.sort((a, b) => a - b);

let a = sortedInput[0];
let b = sortedInput[1];
let c = sortedInput[2];

if (a + b <= c) {
  c = a + b - 1;
}

console.log(a + b + c);
