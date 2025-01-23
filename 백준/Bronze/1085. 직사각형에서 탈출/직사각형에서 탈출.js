const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [X, Y, W, H] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const value = [];

value.push(W - X);
value.push(H - Y);
value.push(X);
value.push(Y);

console.log(Math.min(...value));
