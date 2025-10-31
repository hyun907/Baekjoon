const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const N = input;

let fiveBags = Math.floor(N / 5);
let remain = N % 5;
let answer = -1;

if (remain === 0) {
    answer = fiveBags;
} else {
    while (fiveBags >= 0) {
        remain = N - 5 * fiveBags;
        if (remain % 3 === 0) {
            answer = fiveBags + Math.floor(remain / 3);
            break;
        } else {
            fiveBags -= 1;
        }
    }
}

console.log(answer);