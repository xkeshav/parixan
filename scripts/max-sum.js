/*Given an integer array, find and print a contiguous subarray with the maximum sum in it.

For example,

Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
Output: The contiguous subarray with the largest sum is {4, -1, 2, 1}
 
 
Input:  {8, -7, -3, 5, 6, -2, 3, -4, 2}
 
Output: The contiguous subarray with the largest sum is {5, 6, -2, 3}
ref: https://www.techiedelight.com/print-continuous-subarray-with-maximum-sum/
*/

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSumArray = (input) => {
  let wL = 0;
  let wR = 0;
  let currSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < input.length; i++) {
    const e = input[i];
    currSum += e;
    if (e > currSum) {
      currSum = e;
      wL = wR = i;
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      wR = i;
    }
  }
  const output = input.slice(wL, wR + 1);
  console.log({ output });
};

maxSumArray(input);
