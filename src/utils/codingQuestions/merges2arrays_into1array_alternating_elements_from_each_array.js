// Implement a function that merges two arrays into a single array, alternating elements from each array

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr2 = [0, 9, 8, 7, 6, 5, 4];
const arr3 = [];

const length = arr1.length > arr2.length ? arr1.length : arr2.length;

for (let i = 0; i < length; i++) {
  if (arr1.length > i) {
    arr3.push(arr1[i]);
  }
  if (arr2.length > i) {
    arr3.push(arr2[i]);
  }
}

console.log(arr3);
