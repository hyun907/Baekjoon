const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = 2; i * i <= num; i++) {
  while (num % i === 0) {
    console.log(i);
    num = num / i;
  }
}

if (num > 1) {
  console.log(num);
}
