const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString();

const num = Number(input);

let sum = 1;
let repeat = 1;

while (sum < num) {
  sum = sum + 6 * repeat;
  repeat += 1;
}

console.log(repeat);
