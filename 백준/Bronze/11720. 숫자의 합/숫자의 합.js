const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const caseNum = Number(n);
const inputArr = input.split("").map(Number);
let answer = 0;

for (let i = 0; i < caseNum; i++){
    answer += inputArr[i];
}

console.log(answer);