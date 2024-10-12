const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const maxLen = Math.max(...input.map((line) => line.length));
let result = "";
for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i < input[j].length) {
      result += input[j][i];
    }
  }
}
console.log(result);