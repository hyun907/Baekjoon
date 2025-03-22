const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

let result = 0;

const repeatSum = (num) => {
  const digit = num.toString().length;
  let sum = 0;
  for (let i = 0; i < digit; i++) {
    sum += Number(num.toString()[i]);
  }
  sum += num;
  return sum;
};

for (let i = 1; i < N; i++) {
  const sum = repeatSum(i);
  if (sum === N) {
    result = i;
    break;
  }
}

console.log(result);
