const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input.shift());
const arr = [];
for (let i = 0; i < n; i++){
    arr.push(input[i].split(" "))
    arr[i][0] = Number(arr[i][0])
}

arr.sort((a, b) => {
    if (a[0] == b[0]) {
        return;
    } else {
        return a[0] - b[0];
    }
})

const answer = [];
for (let i = 0; i < n; i++){
    answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));
