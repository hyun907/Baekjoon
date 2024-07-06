const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input[0]);

function solution(str) {
  const upStr = input.toUpperCase(); // 입력 값 대문자로 통일
  const obj = {}; // obj 생성 -> 문자를 key, value를 count로

  for (let i = 0; i < upStr.length; i++) {
    // 입력 값 길이 만큼 반복
    if (obj[upStr[i]] === undefined) {
      // key가 undefinde, 즉 처음 나온다면
      obj[upStr[i]] = 1; // value를 1로
    } else {
      obj[upStr[i]] += 1; // 처음이 아니고 key 값 있다면 +1
    }
  }
  // 문자는 key, 문자가 사용된 횟수는 value(count)로 obj 해결

  let result = "";
  let count = 0; // 0으로 초기화

  for (prop in obj) {
    // obj의 property 확인하는 반복문
    if (obj[prop] > count) {
      // obj의 value가 count 보다 크다면
      count = obj[prop]; // count 값 교체
      result = prop; // result에 해당 property 넣기
    } else if (obj[prop] === count) {
      // value와 count가 같다면 result에 ?넣기
      result = "?";
    }
  }
  console.log(result);
}
