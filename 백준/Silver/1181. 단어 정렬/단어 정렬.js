const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input.shift());

input.sort((a, b) => {
    if (a.length == b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
})

const setArr = [...new Set(input)];
console.log(setArr.join("\n"));