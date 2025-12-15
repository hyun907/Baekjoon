const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
const sqrtNum = Math.sqrt(N);
const answer = Math.floor(sqrtNum);

console.log(answer);