/*
Check if a subarray with 0 sum exists or not
Given an integer array, check if it contains a subarray having zero-sum.

For example,

Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
 
Output: Subarray with zero-sum exists
 
The subarrays with a sum of 0 are:
 
{ 3, 4, -7 }
{ 4, -7, 3 }
{ -7, 3, 1, 3 }
{ 3, 1, -4 }
{ 3, 1, 3, 1, -4, -2, -2 }
{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

*/

const input = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

const subArrayWithSum = (input, target = 0) => {
  let set = new Set();
  const len = input.length;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      let sum = input[i];
      for (let j = i + 1; j < len; j++) {
        sum += input[j];
        if (sum === target) {
          const subArray = input.slice(i, j + 1);
          set.add(subArray);
        }
      }
    }
  }
  return set;
};

const subArrayList = subArrayWithSum(input);

console.log({ subArrayList });
