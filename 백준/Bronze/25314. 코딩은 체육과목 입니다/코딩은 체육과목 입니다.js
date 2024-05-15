const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let str = "";

for (let i=1; i <= input/4; i++) {
    str += "long "
}

console.log(`${str}int`)