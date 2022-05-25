/*
Given an integer array, find and print a contiguous subarray with the maximum sum in it.

For example,

Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}

Output: The contiguous subarray with the largest sum is {4, -1, 2, 1}

Input:  {8, -7, -3, 5, 6, -2, 3, -4, 2}

Output: The contiguous subarray with the largest sum is {5, 6, -2, 3}

*/

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSumSubArray = (input) => {
  const len = input.length;
  let maxSum = 0;
  let currentSum = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < len; i++) {
    const e = input[i];
    currentSum += e;
    console.log({ currentSum, e, maxSum });
    if (currentSum < e) {
      // this is tricky part; if current element is greater than previous sum then leave all element behind and start from this element
      currentSum = e;
      left = i;
    }
    if (maxSum < currentSum) {
      maxSum = currentSum;
      right = i;
    }
  }
  console.log({ left, right });
  return input.slice(left, right + 1);
};

const output = maxSumSubArray(input);
console.log({ output });
