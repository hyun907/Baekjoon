const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const coins = [25, 10, 5, 1];
let results = [];

for (let i = 0; i < T; i++) {
  let change = Number(input[i]);
  const counts = coins.map((coin) => {
    const count = Math.floor(change / coin);
    change %= coin;
    return count;
  });

  results.push(counts.join(" "));
}

console.log(results.join("\n"));
