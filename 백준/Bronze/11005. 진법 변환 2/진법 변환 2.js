const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let [number, base] = input.split(" ").map(Number);

let converted = "";

while (number != 0) {
  let remainder = number % base;
  if (base > 10 && remainder >= 10) {
    remainder = String.fromCharCode(remainder - 10 + "A".charCodeAt(0));
  }
  converted = String(remainder) + converted;

  number = Math.floor(number / base);
}

console.log(converted);
