// Given a string, write a function to count the occurrences of each character in the string


// const str = 'my name is satendra sahu, i live in indore';
// const obj = {};
// for (let i of str) {
//   if (!obj[i]) {
//     obj[i] = 1;
//   } else {
//     obj[i] += 1;
//   }
// }
// console.log(obj);





/// method second 


const str = 'my name is satendra sahu, i live in indore';
const newStr = ''.concat(str.toLowerCase());

const obj = {};
for (let i of newStr) {
  if (i.charCodeAt() >= 97 && i.charCodeAt() < 122) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
}
console.log(obj);