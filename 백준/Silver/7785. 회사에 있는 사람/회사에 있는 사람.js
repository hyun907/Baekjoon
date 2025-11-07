const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const map = new Map();

for (let i = 0; i < n; i++) {
    const [name, state] = input[i].split(" ");
    map.set(name, state)
}

function findKeysByValue(map, targetValue) {
  return [...map]
    .filter(([_, value]) => value === targetValue)
    .map(([key]) => key);
}

const result = findKeysByValue(map, "enter");
const answer = result.sort().reverse();

console.log(answer.join("\n"));