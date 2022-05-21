/* Given a binary array containing 0’s and 1’s, find the largest subarray with equal numbers of 0’s and 1’s.

For example,

Input:  { 0, 0, 1, 0, 1, 0, 0 }
 
Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0 } */

const input = [0, 0, 1, 0, 1, 0, 0];

const largestBinaryArray = (input) => {
  const output = [];
  let subArraylength = 0;
  const replacedArray = input.map((i) => (i === 0 ? (i = -1) : i));
  const len = replacedArray.length;
  for (let i = 0; i < len; i++) {
    let sum = replacedArray[i];
    for (let j = i + 1; j < len; j++) {
      sum += replacedArray[j];
      if (sum === 0) {
        currLen = j - i;
        if (currLen >= subArraylength) {
          output.push(input.slice(i, j + 1)); // TODO: remove smaller length array
          subArraylength = currLen;
        }
      }
    }
  }
  return output;
};

const op = largestBinaryArray(input);

console.log({ op });
