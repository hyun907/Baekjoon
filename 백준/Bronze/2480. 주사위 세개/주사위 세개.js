const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
let reward = 0;

if(a === b && b === c){
    reward = 10000 + a*1000;
} else if(a === b){
    reward = 1000 + a*100;
} else if(a === c){
    reward = 1000 + a*100;
} else if(b === c){
    reward = 1000 + b*100;
} else {
    if(a >= b && a >= c) {
        reward = a*100;
    }
    if(b >= a && b >= c) {
        reward = b*100;
    }
    if(c >= a && c >= b) {
        reward = c*100;
    }
}

console.log(reward);