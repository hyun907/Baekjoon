const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = [];
for (let i = 1; i <= N; i++) {
  baskets.push(i);
}

for (let x = 1; x <= M; x++) {
  const [I, J] = input[x].split(" ").map(Number);
  const slicedBaskets = baskets.slice(I - 1, J); // 범위 정해서 추출
  const reverseBaskets = slicedBaskets.reverse(); // 추출한 값 역순 정렬
  const splicedBaskets = baskets.splice(I - 1, J - I + 1, ...reverseBaskets); // splice로 같은 범위 내 추출값 삽입
}

console.log(baskets.join(" "));