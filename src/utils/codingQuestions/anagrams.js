// anagrams = ?
// ARMY  = MARY


const str = 'army';
const str1 = 'mary';
let isAngram = false;

// method one
if (str.length !== str1.length) {
  isAngram = false;
} else {
  const sortStr = str.split('').sort();
  const sortStr1 = str.split('').sort();

  for (let i = 0; i < sortStr.length; i++) {
    if (sortStr1[i] === sortStr[i]) {
      isAngram = true;
    } else {
      isAngram = false;
      break;
    }
  }
}

console.log(isAngram);
