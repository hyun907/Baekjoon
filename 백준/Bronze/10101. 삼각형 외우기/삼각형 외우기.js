const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (a + b + c !== 180) {
  return console.log("Error");
}

if (a === 60 && b === 60) {
  return console.log("Equilateral");
}

if (a === b || b === c || a === c) {
  return console.log("Isosceles");
}

console.log("Scalene");
