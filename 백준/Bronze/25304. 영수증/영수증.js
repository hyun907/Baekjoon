const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = parseInt(input[0]);
let caseNum = parseInt(input[1]);
let sum = 0;

for (let i = 2; i < caseNum+2; i++) {
    let data = input[i].split(' ');
    let realTotal = parseInt(data[0]) * parseInt(data[1]);
    sum += realTotal
}

if (sum === total) {
    console.log("Yes");
} else {
    console.log("No");
}