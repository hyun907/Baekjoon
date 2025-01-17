const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, str] = fs.readFileSync(filePath).toString().split("\n");
const num = str.split(" ").map(Number);

const composite = [];

for (let i = 0; i < N; i++) {
  for (let j = 2; j < num[i]; j++) {
    if (Number.isInteger(num[i] / j)) {
      composite.push(num[i]);
    }
  }
}

const set = new Set(composite);
const compositeArr = [...set];
if (num.includes(1)) {
  compositeArr.push(1);
}

console.log(N - compositeArr.length);
