const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input.shift());
const arr = input[0].split(" ").map(Number);

const sorted = [...arr].sort((a, b) => a - b);

const rank = new Map();
let r = 0;

for (let i = 0; i < n; i++) {
    if (i === 0 || sorted[i] !== sorted[i - 1]){
        rank.set(sorted[i], r++);
    }
}

const ans = [];

for (let i = 0; i < n; i++){
    ans[i] = rank.get(arr[i]);
}

console.log(ans.join(" "));