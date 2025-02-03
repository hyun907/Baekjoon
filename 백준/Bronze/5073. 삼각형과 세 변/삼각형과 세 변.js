const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let triangle;

for (let i = 0; i < input.length - 1; i++) {
  triangle = input[i].split(" ").map(Number);

  let a = triangle[0];
  let b = triangle[1];
  let c = triangle[2];

  if (a + b > c && b + c > a && a + c > b) {
    a === b && b === c
      ? console.log("Equilateral")
      : a === b || b === c || a === c
      ? console.log("Isosceles")
      : console.log("Scalene");
  } else {
    console.log("Invalid");
  }
}
