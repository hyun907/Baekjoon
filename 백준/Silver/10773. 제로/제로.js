const fs = require("fs");
const [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];

for (let i = 0; i < N; i++) {
    const num = parseInt(arr[i]);
    if (num === 0) {
        stack.pop();
    } else {
        stack.push(num);
    }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);

console.log(sum);