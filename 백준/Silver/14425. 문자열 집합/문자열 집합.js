const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const s = new Set(input.slice(0, n));
const queries = input.slice(n, n + m);

let count = 0;
for (let i = 0; i < m; i++){
    if (s.has(queries[i])) count++;
}

console.log(count);