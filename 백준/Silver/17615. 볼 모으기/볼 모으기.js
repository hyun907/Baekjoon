const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(minMoves(input));

function minMoves(balls) {
  let n = balls.length;
  let moves = [];

  // 왼쪽에서 오른쪽으로 진행하는 경우
  let redCount = 0,
    blueCount = 0;
  let foundOther = false;

  // 빨간 공을 오른쪽으로 옮기는 경우
  for (let i = 0; i < n; i++) {
    if (!foundOther && balls[i] === "B") {
      // 첫 번째 파란 공을 발견
      foundOther = true;
    }
    if (foundOther && balls[i] === "R") {
      // 파란 공 이후의 빨간 공 개수를 세기
      redCount++;
    }
  }
  moves.push(redCount);

  // 파란 공을 오른쪽으로 옮기는 경우
  foundOther = false;
  for (let i = 0; i < n; i++) {
    if (!foundOther && balls[i] === "R") {
      // 첫 번째 빨간 공을 발견
      foundOther = true;
    }
    if (foundOther && balls[i] === "B") {
      // 빨간 공 이후의 파란 공 개수를 세기
      blueCount++;
    }
  }
  moves.push(blueCount);

  // 오른쪽에서 왼쪽으로 진행하는 경우
  (redCount = 0), (blueCount = 0);
  foundOther = false;

  // 빨간 공을 왼쪽으로 옮기는 경우
  for (let i = n - 1; i >= 0; i--) {
    if (!foundOther && balls[i] === "B") {
      // 첫 번째 파란 공을 발견
      foundOther = true;
    }
    if (foundOther && balls[i] === "R") {
      // 파란 공 이후의 빨간 공 개수를 세기
      redCount++;
    }
  }
  moves.push(redCount);

  // 파란 공을 왼쪽으로 옮기는 경우
  foundOther = false;
  for (let i = n - 1; i >= 0; i--) {
    if (!foundOther && balls[i] === "R") {
      // 첫 번째 빨간 공을 발견
      foundOther = true;
    }
    if (foundOther && balls[i] === "B") {
      // 빨간 공 이후의 파란 공 개수를 세기
      blueCount++;
    }
  }
  moves.push(blueCount);

  // 네 가지 경우 중 최소값을 반환
  return Math.min(...moves);
}
