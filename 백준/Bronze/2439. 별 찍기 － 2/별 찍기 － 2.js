const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let output = '';

for (let i=0; i < input; i++){
    let blank = '';
    output += "*";
    for(let j=input-i; j > 1; j--) {
        blank += ' ';
        }
    console.log(blank + output);
}

