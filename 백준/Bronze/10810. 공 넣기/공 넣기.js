const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = new Array(N).fill(0);

for (let x = 1; x <= M; x++) {
  const [I, J, K] = input[x].split(" ").map(Number);

  for (let y = I; y <= J; y++) {
    baskets[y - 1] = K;
  }
}

console.log(baskets.join(" "));
