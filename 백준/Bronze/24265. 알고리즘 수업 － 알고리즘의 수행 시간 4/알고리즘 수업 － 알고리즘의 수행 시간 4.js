const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

console.log((input * (input - 1)) / 2);
console.log(2);
