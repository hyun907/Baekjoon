const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const nArr = input.splice(0, n);
const mArr = input.splice(0, m);

const nSet = new Set(nArr);
const mSet = new Set(mArr);

const answer = [];

nSet.forEach(v => {
    if (mSet.has(v)) answer.push(v);
})

console.log(answer.length);
console.log(answer.sort().join("\n"));