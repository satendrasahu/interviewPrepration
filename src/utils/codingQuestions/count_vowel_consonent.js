// Count number of vowels and consonants in a string using javascript

const str = 'i am satendra'.toLowerCase();

const count = {
  vowel: 0,
  consonent: 0,
  space: 0,
};
for (let i of str) {
  if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
    count.vowel += 1;
  } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 122 && i !== ' ') {
    count.consonent += 1;
  } else if (i === ' ') {
    count.space += 1;
  }
}

console.log(count);
