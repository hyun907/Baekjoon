const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let num1 = input[i].split(" ").map(Number)[0];
  let num2 = input[i].split(" ").map(Number)[1];

  if (num2 % num1 === 0) {
    console.log("factor");
  } else if (num1 % num2 === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
