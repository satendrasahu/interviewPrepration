var array = [22, 66, 18, 45, 45, 22, 24, 18];
// output [ 18, 22, 24, 45, 66 ]
let obj = {};
const unioueArr = [];

for (let i of array) {
  if (!obj[i]) {
    obj[i] = i;
    unioueArr.push(i);
  }
}
obj = {};
const sotedArr = unioueArr.sort((a, b) => a - b);
console.log(sotedArr);



//  Array of Object 



// const arr = [
//     { id: 1, name: 'satendra' },
//     { id: 2, name: 'rohan' },
//     { id: 3, name: 'sohan' },
//     { id: 3, name: 'sohan' },
//     { id: 4, name: 'mohan' },
//   ];
  

// //   output =[
// //     { id: 1, name: 'satendra' },
// //     { id: 2, name: 'rohan' },
// //     { id: 3, name: 'sohan' },
// //     { id: 4, name: 'mohan' }
  
//   let obj = {};
//   const uniQueArr = [];
  
//   for (let i of arr) {
//     if (!obj[i.id]) {
//       obj[i.id] = i.id;
//       uniQueArr.push(i);
//     }
//   }
//   obj = {};
  
//   console.log(uniQueArr);
  