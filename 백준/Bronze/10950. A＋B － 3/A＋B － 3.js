const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);
for (let i=1; i<=t; i++) {
    let plus = input[i].split(" ");
    console.log(parseInt(plus[0]) + parseInt(plus[1]));
}