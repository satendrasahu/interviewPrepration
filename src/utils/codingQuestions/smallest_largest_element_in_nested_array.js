const arr = [15, 24, [29, 85, 56, [36, 14, 6, 98, 34, 52], 22], 87, 60];
// output 
let largestEle = arr[0] //98;
let smallestEle = arr[0] //6;
const largestElementInNestedArr = (arr) => {
  arr.map((data) => {
    if (Array.isArray(data)) {
      largestElementInNestedArr(data);
    } else {
      if (data >= largestEle) {
        largestEle = data;
      }
      if (data <= smallestEle) {
        smallestEle = data;
      }
    }
  });
};

largestElementInNestedArr(arr);

console.log(largestEle, smallestEle);



/// method second



// const arr = [15, 24, [29, 85, 56, [36, 14, 6, 98, 34, 52], 22], 87, 60];
// let largestEle = arr[0];
// let smallestEle = arr[0];

// const flatArr = [];
// const largestElementInNestedArr = (arr) => {
//   arr.map((data) => {
//     if (Array.isArray(data)) {
//       largestElementInNestedArr(data);
//     } else {
//       flatArr.push(data);
//     }
//   });
// };

// largestElementInNestedArr(arr);
// flatArr.sort((a, b) => a - b);
// largestEle = flatArr[flatArr.length - 1];
// smallestEle = flatArr[0];

// console.log(largestEle, smallestEle);
