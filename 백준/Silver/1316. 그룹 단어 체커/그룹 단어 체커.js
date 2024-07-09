const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function isValid(str) {
  let seen = new Set();

  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i]) && str[i] !== str[i - 1]) {
      return false;
    }
    seen.add(str[i]);
  }

  return true;
}

function processStrings(input) {
  let result = 0;

  for (let str of input) {
    if (isValid(str)) {
      result += 1;
    }
  }
  return result;
}

console.log(processStrings(input));
