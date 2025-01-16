const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];

for (let i = 1; i < N + 1; i++) {
  if (N % i === 0) {
    result.push(i);
  }
}

result[K - 1] ? console.log(result[K - 1]) : console.log(0);
