const str = 'My Name Is Satendra Sahu';
const count = {
  lowerChar: 0,
  upperChar: 0,
};

let upperStr = '';
let lowerStr = '';

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 92) {
    count.upperChar += 1;
  }
  if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 122) {
    count.lowerChar += 1;
  }
}

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 92) {
    upperStr += String.fromCharCode(str.charCodeAt(i) + 32);
  } else upperStr += str[i];
}

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 122) {
    lowerStr += String.fromCharCode(str.charCodeAt(i) - 32);
  } else lowerStr += str[i];
}

console.log(upperStr, '\n', lowerStr);
// console.log(count, str.length);
