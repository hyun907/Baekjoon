let fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let num = Number(input);
let title = 666;

while (true) {
  if (title.toString().includes("666")) {
    num -= 1;
    if (num === 0) break;
  }
  title++;
}

console.log(title);
