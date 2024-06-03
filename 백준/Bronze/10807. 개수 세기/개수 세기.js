const fs = require('fs');
const [caseN, input, findV] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

let count = Number(inputArr.filter(element => findV === element).length); 
console.log(count);