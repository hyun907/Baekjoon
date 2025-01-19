const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => Number(i));

const start = input[0];
const end = input[1];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  if (num === 1) {
    return false;
  }
  return true;
}

let primeNums = [];

for (let i = start; i < end + 1; i++) {
  if (isPrime(i)) {
    primeNums.push(i);
  }
}

if (primeNums.length === 0) {
  console.log(-1);
} else {
  const sum = primeNums.reduce((a, b) => a + b);
  const minValue = Math.min(...primeNums);
  console.log(sum);
  console.log(minValue);
}
