const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let basket = new Array(N);
let baskets = basket.fill().map((e, i) => {
  return i + 1;
});

for (let x = 1; x <= M; x++) {
  const [I, J] = input[x].split(" ").map(Number);
  [baskets[I - 1], baskets[J - 1]] = [baskets[J - 1], baskets[I - 1]]; // 대입
}
console.log(baskets.join(" "));
