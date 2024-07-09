const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let totalScore = 0; // 학점 합
let totalCredit = 0; // 평점 합

for (let i = 0; i < input.length; i++) {
  const [, credit, rank] = input[i].split(" ");
  if (rank !== "P") {
    const numCredit = parseFloat(credit);
    // Number() 보다 parseFloat()이 소수점 다루기 더 적합함

    totalCredit += numCredit;
    totalScore += numCredit * rankToRate(rank);
  }
}

const majorScore = totalScore / totalCredit;
console.log(majorScore.toFixed(6));

function rankToRate(rank) {
  const ranks = {
    "A+": 4.5, "A0": 4.0,
    "B+": 3.5, "B0": 3.0,
    "C+": 2.5, "C0": 2.0,
    "D+": 1.5, "D0": 1.0,
    "F": 0.0
  };
  return ranks[rank] || 0;
}