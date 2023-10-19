// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

// Input: arr[] = {2, 1, 5, 3} 
// Output: 4 
// |5 – 1| = 4

// Input: arr[] = {-10, 4, -9, -5} 
// Output: 14 


const arr = [-10, 4, -9, -5];

let longestDifference = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (Math.abs(arr[i] - arr[j]) > longestDifference) {
      longestDifference = Math.abs(arr[i] - arr[j]);
    }
  }
}

console.log(longestDifference);