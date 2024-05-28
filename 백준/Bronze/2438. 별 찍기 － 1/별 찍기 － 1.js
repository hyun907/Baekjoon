const fs = require('fs');
const num = fs.readFileSync("/dev/stdin").toString().trim();

let output = '';

for (let i=0; i < num; i++){
    for(let j=0; j < i+1; j++) {
        output += '*'
        }
        output += "\n"
}

console.log(output);