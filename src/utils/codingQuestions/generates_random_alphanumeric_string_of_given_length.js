// Write a function that generates a random alphanumeric string of a given length. 

const alfaNumericStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

const autoGenerateStringLength = 15;
let randomGeneratedStr = '';

for (let i = 0; i <= autoGenerateStringLength; i++) {
  const randomIndex = Math.floor(Math.random() * alfaNumericStr.length);
  randomGeneratedStr += alfaNumericStr.charAt(randomIndex);
}

console.log(randomGeneratedStr);
