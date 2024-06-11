const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [caseNum, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = Number(caseNum);

const inputNum = input.split(" ").map(Number);
const maxScore = Math.max(...inputNum);
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += inputNum[i];
}

const mySum = (sum / maxScore) * 100;
const answer = mySum / n;

console.log(answer);
