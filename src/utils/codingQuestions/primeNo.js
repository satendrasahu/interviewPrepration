const obj = {};
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  obj[i] = isPrime(i);
}

console.log(obj);
