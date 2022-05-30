/*
Given an integer array, find and print a contiguous subarray with the maximum sum in it.

For example,

Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}

Output: The contiguous subarray with the largest sum is {4, -1, 2, 1}

Input:  {8, -7, -3, 5, 6, -2, 3, -4, 2}

Output: The contiguous subarray with the largest sum is {5, 6, -2, 3}

this is based on Kadane's algorithm or we can say sliding window problem



Kadane's Algorithm is 
local_maximum[i] = max(A[i], A[i] + local_maximum[i-1]);

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
    // this is tricky part; if current element is greater than previous sum then leave all element behind and start from this element
    if (e > currentSum) {
      currentSum = e;
      left = i;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
      right = i;
    }
  }
  console.log({ left, right });
  return input.slice(left, right + 1);
};

const output = maxSumSubArray(input);
console.log({ output });

// using kadane approach we can only find the max value but to get the index, we have to use above way, keep left and right element index in hand
const kadaneWay = (arr) => {
  let local_max = 0;
  let global_max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    local_max = Math.max(element, element + local_max);
    console.log({ local_max });
    if (local_max > global_max) {
      global_max = local_max;
    }
    console.log({ global_max });
  }

  return global_max;
};

kadaneWay(input);
