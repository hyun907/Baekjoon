const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const card = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const map = new Map(arr.map((value, index) => [value, index]));

const result = card
    .filter(num => map.has(num))
    .map(num => ({value: num, index: map.get(num)}))

const indexes = result.map(obj => obj.index);

const answer = new Array(m).fill(0);

const set = new Set(indexes);
for (let i = 0; i < m; i++){
    if (set.has(i)) {
        answer[i] = 1;
    }
}

console.log(answer.join(" "));