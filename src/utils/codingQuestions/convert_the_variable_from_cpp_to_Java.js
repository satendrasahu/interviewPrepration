// Write a program to convert the variable from c++ to Java and vice versa using javascript
// Input: this_is_a_variable
// output: thisIsAVariable

const input = 'this_is_a_variable';

let output = '';
let str = '';
let index_underscore;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '_') {
    output += str;
    str = '';
    index_underscore = i;
  } else {
    str += index_underscore + 1 === i ? input[i].toUpperCase() : input[i];
  }
}
output += str;
str = '';

console.log(output);



// second method 

// function toTitleCase(str) {
//   return str.replace(/\b\w/g, (l) => l.toUpperCase());
// }

// console.log(toTitleCase('my name is satendra sahu'));

