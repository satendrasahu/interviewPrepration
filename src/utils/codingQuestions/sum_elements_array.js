// Implement a function to find the sum of all the numbers in an array.

const arr = [2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, ind) => acc + ind, 0);

console.log(sum);
