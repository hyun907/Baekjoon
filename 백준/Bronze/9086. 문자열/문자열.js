const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  result1 = input[i].slice(0, 1);
  result2 = input[i].slice(-1);
  console.log(`${result1}${result2}`);
}
