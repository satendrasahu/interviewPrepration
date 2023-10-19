const arr = [
    { id: 1, name: 'satendra sahu', age: 26, clg: 'BIT Mesra' },
    { id: 2, name: 'rohan kumar', age: 24, clg: 'Ranchi' },
    { id: 3, name: 'deepika', age: 28, clg: 'indore' },
    { id: 4, name: 'mohini', age: 30, clg: 'bhopal' },
    { id: 5, name: 'kumar vishwash', age: 23, clg: 'devash' },
  ];
  
  const sortedArr = arr.sort((a, b) => a.name - b.name);
  
  console.log(sortedArr);
  