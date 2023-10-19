// Get the frequency of each characters in a specified string using JavaScript in alphabetical order
// Input: adgffad
// Output: a2d2f2g1

const str = 'adgffad'.toLowerCase();
const obj = {};

for (let i of str) {
  if (!obj[i]) {
    obj[i] = 1;
  } else {
    obj[i] += obj[i];
  }
}

console.log(obj);
