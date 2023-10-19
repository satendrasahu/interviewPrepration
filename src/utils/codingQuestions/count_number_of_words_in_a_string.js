// Count number of words in a string or sentence using javascript

// Input: We are learning javascript.
// Output: Number of words in “We are learning javascript.” is 4

const input = 'We are learning javascript';
let wordCount = 0;
let temStr = '';
for (let i of input) {
  if (i === ' ') {
    wordCount += 1;
    temStr = '';
  } else {
    temStr += i;
  }
}
wordCount += 1;

console.log(wordCount);
