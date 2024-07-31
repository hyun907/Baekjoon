const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = n.split(" ");

const A = input.slice(0, N);
const B = input.slice(N, 2 * N);

const AA = A.map((val) => val.split(" "));
const BB = B.map((val) => val.split(" "));

let arr = [];

const answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr.push(Number(AA[i][j]) + Number(BB[i][j]));
  }
  answer[i] = arr;
  arr = [];
  console.log(answer[i].join(" "));
}
