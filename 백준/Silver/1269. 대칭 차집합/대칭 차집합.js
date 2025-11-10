const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const aArr = input[0].split(" ").map(Number);
const bArr = input[1].split(" ").map(Number);

const aSet = new Set(aArr);
const bSet = new Set(bArr);

const differenceOfAB = new Set(aArr);
const differenceOfBA = new Set(bArr);

// a - b
aSet.forEach(v => {
    if (bSet.has(v)) differenceOfAB.delete(v);
})

// b - a
bSet.forEach(v => {
    if (aSet.has(v)) differenceOfBA.delete(v);
})

console.log(differenceOfAB.size + differenceOfBA.size);