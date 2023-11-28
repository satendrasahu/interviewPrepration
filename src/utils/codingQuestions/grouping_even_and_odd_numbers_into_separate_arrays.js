// Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 


const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 9, 8, 7, 6, 5, 4, 44, 55, 6, 62, 43, 56, 46,
  ];
  
  const evenArr = [];
  const oddArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  
  console.log(evenArr, oddArr);
  
