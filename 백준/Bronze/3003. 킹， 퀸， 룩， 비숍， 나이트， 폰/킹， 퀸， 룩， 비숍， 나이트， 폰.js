const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];
const answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === chess[i]) {
    answer.push(0);
  } else if (input[i] > chess[i]) {
    answer.push(chess[i] - input[i]);
  } else if (input[i] < chess[i]) {
    answer.push(chess[i] - input[i]);
  }
}

console.log(answer.join(" "));
