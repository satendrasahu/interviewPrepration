const str = 'my name is satendra sahu';

output ="ym eman si ardnetas uhas"
let reverseStr = '';
let tempArr = '';

for (let i of str) {
  if (i === ' ') {
    for (let j = tempArr.length - 1; j >= 0; j--) {
      reverseStr += tempArr[j];
    }
    reverseStr += ' ';
    tempArr = '';
  } else {
    tempArr += i;
  }
}
for (let j = tempArr.length - 1; j >= 0; j--) {
  reverseStr += tempArr[j];
}
tempArr = '';

console.log(reverseStr);




// seconds 

// const str = 'my name is satendra sahu';
// let reverseStr = '';
// let tempArr = '';

// for (let i of str) {
//   if (i === ' ') {
//     reverseStr += tempArr.split('').reverse().join('') + ' ';
//     tempArr = '';
//   } else {
//     tempArr += i;
//   }
// }
// reverseStr += tempArr.split('').reverse().join('');
// tempArr = '';

// console.log(reverseStr);

