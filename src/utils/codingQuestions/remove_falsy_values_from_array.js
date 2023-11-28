// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
// false
// zero(0,-0)
// empty string(“”, ‘ ‘ , ` `)
// BigIntZero(0n,0x0n)
// null
// undefined
// NaN

let arr = [23, 0, "hello",0n,null, false, true, NaN, 12, "hi", undefined, [], ""];

// method one 
const newArr = arr.filter((data) => data);
console.log(newArr);


// method 2



// const newArr = [];

// for (let i of arr) {
//   if (i) {
//     newArr.push(i);
//   }
// }

// console.log(newArr);

 