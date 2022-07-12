/*Given a circular integer array, find a subarray with the largest sum in it.

For example,

Input:  {2, 1, -5, 4, -3, 1, -3, 4, -1}
 
Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.
 
 
Input:  {-3, 1, -3, 4, -1, 2, 1, -5, 4}
 
Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.*/

const input = [2, 1, -5, 4, -3, 1, -3, 4, -1];

const minSumArray = (input) => {
  let wL = 0;
  let wR = 0;
  let currSum = 0;
  let minSum = +Infinity;
  for (let i = 0; i < input.length; i++) {
    const e = input[i];
    currSum += e;
    if (e < currSum) {
      currSum = e;
      wL = wR = i;
    }
    if (currSum < minSum) {
      minSum = currSum;
      wR = i;
    }
  }
  console.log({ wL, wR });
  const output = input.slice(wL, wR + 1);
  console.log({ output });
};
minSumArray(input);
