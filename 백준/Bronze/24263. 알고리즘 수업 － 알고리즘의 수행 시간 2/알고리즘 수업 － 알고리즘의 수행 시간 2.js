const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

console.log(input);
console.log(1);
