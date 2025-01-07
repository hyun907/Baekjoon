const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "";

for (let i = 0; i < T; i++) {
  let change = Number(input[i]); // 센트 단위로 입력받기

  let quarter = Math.floor(change / 25); // 25센트
  change %= 25;
  let dime = Math.floor(change / 10); // 10센트
  change %= 10;
  let nickel = Math.floor(change / 5); // 5센트
  change %= 5;
  let penny = change; // 남은 센트는 전부 페니

  result += `${quarter} ${dime} ${nickel} ${penny}\n`;
}

console.log(result.trim()); // 마지막 줄바꿈 제거
