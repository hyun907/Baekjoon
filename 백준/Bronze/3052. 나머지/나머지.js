const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const divideInput = input.map((element) => element % 42);

const uniqueArr = [...new Set(divideInput)];

console.log(uniqueArr.length);
