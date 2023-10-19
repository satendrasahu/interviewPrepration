const num = 14;
let febonicciArr = [0, 1, 1];

// 0   // 0  =0
// 1   // 1  =1
// 0+1 // 1  =2
// 1+1 // 2  =3
// 1+2 // 3  =4
// 2+3 // 5  =5
// 2+5 // 8  =6
// 5+8 // 13 =7

if (num <= 0) {
  febonicciArr = [0];
  return;
}

if (num === 1) {
  febonicciArr = [0, 1];
  return;
}
if (num === 2) {
  febonicciArr = [0, 1, 1];
  return;
}

let sum = 1;

for (let i = 3; i <= num; i++) {
  sum =
    febonicciArr[febonicciArr.length - 1] +
    febonicciArr[febonicciArr.length - 2];
  febonicciArr.push(sum);
}

console.log(febonicciArr);
