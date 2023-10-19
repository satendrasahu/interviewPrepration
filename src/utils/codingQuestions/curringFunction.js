mul(2)(3)(4); // 24
mul(4)(3)(4); // 48

function mul(a) {
  return function (b) {
    return function (c) {
      console.log(a * b * c);
    };
  };
}



// -=-=--=-=-=-=-=-=-=-=-===-=-=-==-=-=-------=-=-=-================---------------
// add(2)(3)(4); // 9
// add(4)(3)(4); // 11

// function add(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
