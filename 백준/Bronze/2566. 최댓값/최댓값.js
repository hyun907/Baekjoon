const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let maxValue = -1;
let maxRow = -1;
let maxCol = -1;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (arr[i][j] > maxValue) {
      maxValue = arr[i][j];
      maxRow = i;
      maxCol = j;
    }
  }
}

console.log(maxValue);
console.log(maxRow + 1, maxCol + 1);
