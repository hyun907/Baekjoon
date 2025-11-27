const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const num = input.map(Number);

function sieve(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}

let max = Math.max(...num);

const isPrimeArr = sieve(max);
const answer = [];

for (let i = 0; i < n; i++) {
    let cnt = 0;
    const target = num[i];
    for (let j = 2; j <= target / 2; j++) {
        if (isPrimeArr[j] && isPrimeArr[target - j]) {
            cnt++;
        }
    }
    answer.push(cnt);
}

console.log(answer.join("\n"));