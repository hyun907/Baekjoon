const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const result =
  (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);
console.log(`${result}\n${3}`);
