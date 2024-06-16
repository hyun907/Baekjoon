const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const caseCount = Number(input[0]);
let result = "";

for (let i = 1; i <= caseCount; i++) {
  let count = Number(input[i].split(" ")[0]);
  let caseStr = input[i].split(" ")[1];
  for (let j = 0; j < caseStr.length; j++) {
    for (let k = 0; k < count; k++) {
      result += caseStr[j];
    }
  }
  result += "\n";
}

console.log(result);
