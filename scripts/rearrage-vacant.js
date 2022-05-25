/*Input:
 
X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0 }
Y[] = { 1, 8, 9, 10, 15 }
 
The vacant cells in X[] is represented by 0
 
Output:
 
X[] = { 1, 2, 3, 5, 6, 8, 9, 10, 15 }*/

const x = [0, 2, 0, 3, 0, 5, 6, 0, 0];
const y = [1, 8, 9, 10, 15];

const fillAndSort = (a1, a2) => {
  const len = a1.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    const e1 = a1[i];
    console.log({ e1 });
    if (e1 === 0) {
      a1[i] = y[count];
      count++;
    }
  }
  a1.sort((a, b) => a - b);
};

//fillSorted(x, y);

/*Given a binary array, find the index of 0 to be replaced with 1 to get the maximum length sequence of continuous ones.

For example, consider the array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }. We need to replace index 7 to get the continuous sequence of length 6 containing all 1’s.
https://www.techiedelight.com/find-index-0-replaced-get-maximum-length-sequence-of-continuous-ones/
*/

const data = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0];

const placeOfZero = (input) => {
  const len = input.length;
  let diff = 0;
  let points = [];
  for (let i = 0; i < len; i++) {
    const e1 = input[i];
    for (let j = i + 1; j < len; j++) {
      const e2 = input[j];
      if (e1 === 0 && e2 === 0) {
        console.log(i, j);
        points.push([i, j]);
        break;
      }
    }
  }

  console.log({ diff, points });
};

placeOfZero(data);
