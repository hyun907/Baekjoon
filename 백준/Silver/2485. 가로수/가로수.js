const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 최대 공약수가 가로수 나무들 사이의 값이 되게 만들기
const [n, ...streetTrees] = input.map(Number);
const difference = new Set();
for (let i = 0; i < streetTrees.length - 1; i++) {
    difference.add(streetTrees[i+1] - streetTrees[i]);
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

let gcdAll = null;
for (let d of difference) {
    if (gcdAll === null) {
        gcdAll = d;
    } else {
        gcdAll = gcd(gcdAll, d);
    }
}

let answer = 0;
for (let i = 0; i < streetTrees.length - 1; i++){
    answer += (streetTrees[i+1] - streetTrees[i]) / gcdAll - 1;
}

console.log(answer);