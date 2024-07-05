const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString();
const N = Number(input);

for (let i = 1; i <= N; i++) {
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

for (let i = N - 1; i >= 1; i--) {
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}
