const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = Number(input[0].split(' ')[1]);
// 5
let arr = input[1].split(' ').map(e => Number(e));
// [1, 10, ... 6]

const answer = arr.filter(v => max > v);
// [1, 4, 2, 3]

console.log(answer.join(" "));
