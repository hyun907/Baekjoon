const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString();
let sum = 2;

for (let i = 0; i < input; i++) {
  sum = sum + Math.pow(2, i);
}

console.log(sum * sum);
