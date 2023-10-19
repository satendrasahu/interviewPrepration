// factorial 5! == 5*4*3*2*1
// 1! || 0! ===1

const factorial = (number) => {
    let factorialSum = 1;
    if (number === 0 || number === 1) {
      return 1;
    }
  
    for (let i = 2; i <= number; i++) {
      factorialSum *= i;
    }
    return factorialSum;
  };
  
  console.log(factorial(5));
  


//    methods 2 


// const factorial = (number) => {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   };
  
//   console.log(factorial(5));
  