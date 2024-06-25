const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const arrA = input[0].split("");
const arrB = input[1].split("");

const reverseA = Number(arrA.reverse().join(""));
const reverseB = Number(arrB.reverse().join(""));

let answer = reverseA > reverseB ? reverseA : reverseB

console.log(answer);