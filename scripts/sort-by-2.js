/*Given an integer array, rearrange it such that every second element becomes greater than its left and right elements. Assume no duplicate elements are present in the array.

For example,

Input:  {1, 2, 3, 4, 5, 6, 7}
Output: {1, 3, 2, 5, 4, 7, 6}
 
Input:  {9, 6, 8, 3, 7}
Output: {6, 9, 3, 8, 7}
 
Input:  {6, 9, 2, 5, 1, 4}
Output: {6, 9, 2, 5, 1, 4}
*/

const input = [1, 2, 3, 4, 5, 6, 7];

const sortWithMedian = (input) => {
  const len = input.length;
  const sorted = input.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    const nx = i + 1;
    if (nx % 2 == 0) {
      const c = sorted[i];
      const n = sorted[i + 1];
      [sorted[i + 1], sorted[i]] = [c, n];
    }
  }

  console.log({ sorted });
};

//sortWithMedian(input);

//To illustrate, consider the array {0, -3, 5, -4, -2, 3, 1, 0}. The equilibrium index is found at index 0, 3, and 7.

const data = [0, -3, 5, -4, -2, 3, 1, 0];

const findEquilibriumPoint = (input) => {
  for (let i = 0; i < data.length; i++) {
    const leftSubArray = data.slice(0, i);
    const rightSubArray = data.slice(i + 1, data.length);
    const leftSum = leftSubArray.reduce((p, n) => p + n, 0);
    const rightSum = rightSubArray.reduce((p, n) => p + n, 0);
    if (rightSum === leftSum) {
      console.log({ i });
    }
  }
};

//findEquilibriumPoint(data);

/*Given an integer array, replace each element with the product of every other element without using the division operator.

For example,

Input:  { 1, 2, 3, 4, 5 }
Output: { 120, 60, 40, 30, 24 */

const value = [1, 2, 3, 4, 5];

const findMultipliedArray = (input) => {
  const len = input.length;
  const arr = [];
  // collect all left multiples
  const left = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * input[i - 1];
  }

  const right = new Array(len).fill(1);
  for (let j = len - 2; j >= 0; j--) {
    right[j] = right[j + 1] * input[j + 1];
  }
  console.log({ left, right });

  for (let i = 0; i < len; i++) {
    arr[i] = left[i] * right[i];
  }
  console.log({ arr });
};

//findMultipliedArray(value);

/*Given an integer array, find the maximum difference between two elements in it such that the smaller element appears before the larger element.

For example,

Input:  { 2, 7, 9, 5, 1, 3, 5 }
 
Output: The maximum difference is 7.
 
The pair is (2, 9)*/

const num = [2, 7, 9, 5, 1, 3, 5];

const largestDiff = (num) => {
  const len = num.length;
  let diff = 0;
  let points = [];
  for (let i = 0; i < len; i++) {
    const e1 = num[i];
    for (let j = i + 1; j < len; j++) {
      const e2 = num[j];
      let currentDiff = e2 - e1;
      if (currentDiff > diff) {
        diff = currentDiff;
        points = [i, j];
      }
    }
    console.log({ points, diff });
  }
};

largestDiff(num);
