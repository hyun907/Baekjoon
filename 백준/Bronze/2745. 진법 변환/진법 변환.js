const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString();

const [N, B] = input.split(" ");
const base = Number(B);

let decimalValue = 0;

for (let i = 0; i < N.length; i++) {
  let digit = N[i];

  if (digit >= "0" && digit <= "9") {
    digit = digit.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    digit = digit.charCodeAt(0) - "A".charCodeAt(0) + 10;
  }

  decimalValue += digit * Math.pow(base, N.length - i - 1);
}

console.log(decimalValue);
