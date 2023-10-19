// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [3, 3, 4, 2, 5, 7, 99, 4, 56, 8, 67, 33];

// function EvenArr(arr) {}

const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) newArr.push(arr[i]);
}

console.log(newArr);


