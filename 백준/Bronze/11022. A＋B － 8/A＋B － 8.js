const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split("\n");
// input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2']
let caseNum = parseInt(input[0]);
// caseNum = 5
let result = "";
// result = 0, for 문을 통해 값 누적

for (let i = 1; i < caseNum + 1; i++) {
  let numbers = input[i].split(" ");
  let plus = parseInt(numbers[0]) + parseInt(numbers[1]);
  result += `Case #${i}: ${numbers[0]} + ${numbers[1]} = ${plus}\n`;
}

console.log(result);
