const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = parseInt(N);

for (let i = 0; i < count; i++) {
    const stack = [];
    const arr = input[i];
    let isValid = true;
    
    for (let j = 0; j < arr.length; j++) {
        // "("면 push
        if (arr[j] === "(") {
            stack.push(1);
        } else {
            // ")"인데 지울 거 없으면 false로 멈추기
            if (stack.length === 0) {
                isValid = false;
                break;
            } 
            // ")"인데 지울 거 있으면 지우기
            stack.pop();
        }
    }
    
    if (isValid && stack.length === 0) {
        console.log("YES");
    } else {
        console.log("NO")
    }
}