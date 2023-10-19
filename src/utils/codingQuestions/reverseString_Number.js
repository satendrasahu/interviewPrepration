const number = '12345';
output = '54321'
const arr = number.split('');

console.log(arr.reverse().join(''));


// second way
// let num = 123;
// let newNum = 0;
// while (num > 0) {
//   let d = num % 10;
//   newNum = newNum * 10 + d;
//   num = parseInt(num / 10);
// }

// console.log(newNum);



// -=================================================================================================================

// const str = 'my name is satendra sahu';
// let reverseStr = '';

// method 1

// for (let i = str.length - 1; i >= 0; i--) {
//   reverseStr += str[i];
// }

// console.log(reverseStr);

// method 2
// const reverseSr1 = str.split('').reverse().join('');
// console.log(reverseSr1);