// Reduce the string by removing K consecutive identical characters
// Given a string str and an integer K, the task is to reduce the string by applying the following operation any number of times until it is no longer possible:

// Input: K = 2, str = “geeksforgeeks” 
// Output: gksforgks 
// Explanation: After removal of both occurrences of the substring “ee”, the string reduces to “gksforgks”.

// Input: K = 3, str = “qddxxxd” 
// Output: q 
// Explanation: 
// Removal of “xxx” modifies the string to “qddd”. 
// Again, removal of “ddd”modifies the string to “q”. 



let str = 'qddxxxdqqu';
const num = 3;
let str1 = str.split('');
let arr = [];

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < i + num; j++) {
    if (str[i] === str[j]) {
      arr.push(i);
      arr.push(j);
    } else {
      break;
    }
  }
  let uniqueArr = [...new Set(arr)];
  if (uniqueArr.length === num) {
    i += num;
    str1.splice(uniqueArr[0], num);
    str = str1.join('');
    i = -1;
  }
  arr = [];
  uniqueArr = [];
}

console.log(str1.join(''));
