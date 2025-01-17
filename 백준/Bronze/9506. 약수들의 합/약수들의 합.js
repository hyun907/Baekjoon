const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let factor = [];
let sum = 0;
let result = "";

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 1; j < input[i] + 1; j++) {
    if (input[i] % j === 0) {
      factor.push(j);
    }
  }

  factor.forEach((num) => {
    sum += num;
  });

  sum -= input[i];

  for (let k = 0; k < factor.length - 1; k++) {
    result += factor[k] + " + ";
  }
  let newResult = "";
  newResult = result.slice(0, result.length - 3);
  if (sum === input[i]) {
    console.log(`${input[i]} = ${newResult}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }

  result = "";
  sum = 0;
  factor = [];
}
