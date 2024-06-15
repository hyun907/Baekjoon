const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let counts = [];
const alpArr = alphabet.split("");
for (let i = 0; i < alpArr.length; i++) {
  counts.push(input.indexOf(alpArr[i]));
}

const answer = counts.join(" ");
console.log(answer);
