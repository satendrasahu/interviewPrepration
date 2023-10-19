// Input a number and check whether it is palindrome or not in javascript
// For example: 25352 || 'abcba'

const str = 'abcba' || '25352';
let isPalindrm = false;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] === str[str.length - 1 - i]) {
    isPalindrm = true;
  } else {
    isPalindrm = false;
    break;
  }
}

console.log(isPalindrm);



// second method

// Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation. 

// const str = 'abcba' || '25352';
// const newStr = str.replaceAll(' ', '');
// let isPalindrm = false;

// for (let i = 0; i < newStr.length / 2; i++) {
//   if (newStr[i] === newStr[newStr.length - 1 - i]) {
//     isPalindrm = true;
//   } else {
//     isPalindrm = false;
//     break;
//   }
// }

// console.log(isPalindrm);

