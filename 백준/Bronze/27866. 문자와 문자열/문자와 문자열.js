const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [input, index] = fs.readFileSync(filePath).toString().trim().split("\n");

const s = input.split("");
const i = Number(index) - 1;

console.log(s[i]);