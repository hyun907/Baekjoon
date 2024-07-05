const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const reverse = input.split("").reverse().join("");

console.log(input === reverse ? 1 : 0);