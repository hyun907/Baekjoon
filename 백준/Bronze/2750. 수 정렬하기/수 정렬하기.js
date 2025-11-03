const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number);

const sortAsc = function (numArr) {
    const sortedArr = [];
    
    for (let i = 1; i < numArr.length; i++) {
        let isInserted = false;
        for (let j = 0; j < sortedArr.length; j++) {
            if (numArr[i] < sortedArr[j]) {
                sortedArr.splice(j, 0, numArr[i]);
                isInserted = true;
                break;
            }
        }
        if (!isInserted) {
            sortedArr.push(numArr[i]);
        }
    }
    return sortedArr;
}

console.log(sortAsc(arr).join('\n'));