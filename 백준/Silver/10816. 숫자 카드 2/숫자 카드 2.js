const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const cards = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const queries = input.shift().split(" ").map(Number);

const count = new Array(m).fill(0);

const cardsMap = new Map();

for (let num of cards) {
    if (cardsMap.has(num)){
        cardsMap.set(num, cardsMap.get(num) + 1);
    } else {
        cardsMap.set(num, 1);
    }
}

for (let i = 0; i < m; i++) {
    if (cardsMap.has(queries[i])) count[i] = cardsMap.get(queries[i]);
}
console.log(count.join(" "));