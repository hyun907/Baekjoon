const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const pokemons = input.slice(0, n);
const queries = input.slice(n, n + m);

const nameToIndex = new Map();
const indexToName = new Map();

for (let i = 0; i < n; i++) {
    nameToIndex.set(pokemons[i], i + 1);
}

for (let i = 0; i < n; i++) {
    indexToName.set(i + 1, pokemons[i]);
}

const answer = [];

for (let i = 0; i < m; i++) {
    if (isNaN(queries[i])) {
        // 문자열이면 번호
        answer.push(nameToIndex.get(queries[i]));
    } else {
        // 숫자면 포켓몬의 이름
        answer.push(indexToName.get(Number(queries[i])));
    }
}

console.log(answer.join("\n"))
