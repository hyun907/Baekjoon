const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const leapYear = Number(input);
if (leapYear%4===0 && leapYear%100!==0 || leapYear%400===0){
    console.log(1);
} else {console.log(0);}
