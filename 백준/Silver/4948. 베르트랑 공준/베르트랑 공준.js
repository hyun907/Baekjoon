const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input.map(Number);

function sieve(a, b) {
  const isPrime = Array(b + 1).fill(true);

  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= b; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= b; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}

for (let i = 0; i < num.length - 1; i++) {
  const a = num[i] + 1;
  const b = num[i] * 2;

  const primes = sieve(a, b);
  console.log(primes.length);
}
