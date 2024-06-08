const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const attendanceNum = [];
for (let i = 1; i <= 30; i++) {
  attendanceNum.push(i);
}

const arrFunction = (participant, completion) => {
  let arr = [];
  participant.forEach((element) => {
    let num = completion.indexOf(element);
    if (num === -1) {
      arr.push(element);
    }
  });
  return arr;
};

let answer = arrFunction(attendanceNum, input).sort((a, b) => a - b);
let answer1 = answer[0];
let answer2 = answer[1];

console.log(answer1);
console.log(answer2);
