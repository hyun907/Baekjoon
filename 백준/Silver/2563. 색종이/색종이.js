const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 색종이 수
const paperCount = parseInt(input[0]);

// 100x100 도화지 배열을 0으로 초기화
const canvas = Array.from(Array(100), () => Array(100).fill(0));

// 색종이 붙이기
for (let i = 1; i <= paperCount; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let row = x; row < x + 10; row++) {
    for (let col = y; col < y + 10; col++) {
      canvas[row][col] = 1; // 검은색 영역 표시
    }
  }
}

// 검은색 영역 넓이 계산
let blackArea = 0;
for (let row = 0; row < 100; row++) {
  for (let col = 0; col < 100; col++) {
    if (canvas[row][col] === 1) {
      blackArea++;
    }
  }
}

console.log(blackArea);
