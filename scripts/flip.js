// https://www.interviewbit.com/problems/flip/
/*Explanation 1:

A = "010"


Pair of [L, R] | Final string
____________|__________
[1 1]          | "110"
[1 2]          | "100"
[1 3]          | "101"
[2 2]          | "000"
[2 3]          | "001"



We see that two pairs [1, 1] and [1, 3] give same number of 1s in final string. So, we return [1, 1].

Explanation 2:

No operation can give us more than three 1s in final string. So, we return empty array [].*/

function getFlip(input) {
  let wL = 0;
  let wR = 0;
  let maxOne = 0;
  let points = {};
  let lastIndexOfOne = -1;
  const maxFlipAllowed = 1;
  let maxLength = 0;
  for (let i = 0; i < input.length; i++) {
    let e = input[i];
    if (e === 0) {
      wR = i;
    }
    if (e === 1) {
      maxOne++;
      if (maxOne > maxFlipAllowed) {
        wL = lastIndexOfOne;
        wR = i; // shift window right pointer also
        maxOne--;
      }
      lastIndexOfOne = i;
    }
    currLength = wR - wL;
    if (currLength > maxLength) {
      maxLength = currLength;
      points = { wL, wR, lastIndexOfOne };
    }
  }
  const subArray = input.slice(points.wL + 1, points.wR + 1);
  console.log({ points, subArray });
}

const input = [0, 1, 0, 0, 0, 1];
getFlip(input);
