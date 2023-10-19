//  create a loop, iterate 100 time while outputting "Fizz" if multile of 3, while outputting "Fuzz" if multiple of 5, while outputting "FizzFuzz" if multiple of 3 and 5 both 


const arr = [];
const num = 100;
for (let i = 1; i <= num; i++) {
  if (i % 15 === 0) {
    // console.log('fizz fuzz', i);
    arr.push('fizzfuzz');
  } else if (i % 3 === 0) {
    // console.log('fizz', i);
    arr.push('fizz');
  } else if (i % 5 === 0) {
    // console.log('fuzz', i);
    arr.push('fuzz');
  } else {
    arr.push(i);
  }
}

console.log(arr);
