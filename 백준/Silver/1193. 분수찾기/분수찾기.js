let input = +require('fs').readFileSync('dev/stdin').toString().trim()
let topNum;
let botNum;
let line = 0;

// 라인 업데이트
while (input > 0) {
  line++;
  input -= line;
}

// 라인에서의 위치 구하기
let linePosition = line + input; // input은 현재 음수이므로

// 라인의 방향 고려해서 topNum, botNum 구하기
if(line % 2 === 1){
  topNum = line;
  botNum = 1;
  for(let i=0; i<linePosition-1; i++){
    topNum--;
    botNum++;
  }
}

if(line % 2 === 0){
  topNum = 1;
  botNum = line;
  for(let i=0; i<linePosition-1; i++){
    topNum++;
    botNum--;
  }
}
console.log(`${topNum}/${botNum}`)