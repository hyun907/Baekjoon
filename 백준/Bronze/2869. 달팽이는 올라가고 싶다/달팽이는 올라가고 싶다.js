const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString();
const [A, B, V] = input.split(" ").map((i) => Number(i));

const oneDay = A - B;
const lastDay = V - A;

const result = Math.ceil(lastDay / oneDay) + 1;
console.log(result);
