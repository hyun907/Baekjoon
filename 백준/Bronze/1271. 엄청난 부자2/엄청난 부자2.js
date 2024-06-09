const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const n = BigInt(input.shift());
const m = BigInt(input.shift());

console.log((n / m).toString());
console.log((n % m).toString());