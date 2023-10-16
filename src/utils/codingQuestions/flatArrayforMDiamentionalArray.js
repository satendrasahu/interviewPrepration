const arr = [
    [1, 2, 3, 4, 5, 6],
    [5, 6, 7, 8, 3],
    [3, 3, 46, 8, 5, [3, 4, 5, 6, [4, 5, 6, [6, 7, 89, 3, [5, 67]]]]],
  ];
  // const data = arr.flat(Infinity);
  // console.log(data);
  
  const newArr = [];
  let sum = 0;
  const flatArr = (arr) => {
    arr.map((data) => {
      if (Array.isArray(data)) {
        flatArr(data);
      } else {
        newArr.push(data);
        sum += data;
      }
    });
  };
  flatArr(arr);
  console.log(newArr, sum);
  