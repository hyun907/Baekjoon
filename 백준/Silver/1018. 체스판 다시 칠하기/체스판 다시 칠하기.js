let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [size, ...arr] = input;
let [N, M] = size.split(" ").map(Number);
arr = arr.map((i) => i.split(""));

const answer = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function checkCount(x, y, color) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== color[i][j]) {
        count++;
      }
    }
  }
  return count;
}

for (let x = 0; x <= N - 8; x++) {
  for (let y = 0; y <= M - 8; y++) {
    answer.push(checkCount(x, y, white));
    answer.push(checkCount(x, y, black));
  }
}

console.log(Math.min(...answer));
