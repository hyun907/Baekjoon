const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const alp = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
// Obj alp
// key: 알파벳, value: 해당 시간

let answer = 0;

for (let i = 0; i < input.length; i++) {
  for (key in alp) {
    if (key.includes(input[i])) {
      answer += alp[key];
    }
  }
}
// 1. input의 length 만큼 반복
// 2. 객체 key 값 for in 반복으로 접근
// 3. if key가 input[i] 번째를 포함하고 있다면, answer에 alp[key], 즉 해당하는 value 값을 더함

console.log(answer);
