const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [caseNum, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(caseNum);

if (N === 1) {
  console.log(0);
} else {
  const nums = input.map((v) => v.split(" "));

  const x = nums
    .map((v) => v[0])
    .sort((a, b) => a - b)
    .map(Number);
  const y = nums
    .map((v) => v[1])
    .sort((a, b) => a - b)
    .map(Number);

  const maxX = x[N - 1];
  const minX = x[0];
  const maxY = y[N - 1];
  const minY = y[0];

  console.log((maxX - minX) * (maxY - minY));
}
