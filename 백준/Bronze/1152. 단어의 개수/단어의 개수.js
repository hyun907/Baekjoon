const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let answer = input[0] === "" ? 0 : input.length;
console.log(answer);