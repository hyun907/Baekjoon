const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const h = Number(input[0]);
const m = Number(input[1]);

if(m <= 59 && m >= 45){
    console.log(`${h} ${m-45}`);
} else if(h > 0 && m < 45){
    console.log(`${h-1} ${m+15}`);
} else if(h===0 && m < 45){
    console.log(`23 ${m+15}`);
}