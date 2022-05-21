/*Given two sorted arrays, X[] and Y[] of size m and n each, merge elements of X[] with elements of array Y[] by maintaining the sorted order, i.e.,
	fill X[] with the first m smallest elements and fill Y[] with remaining elements.

Do the conversion in-place and without using any other data structure.

 
For example,

Input:
 
X[] = { 1, 4, 7, 8, 10 }
Y[] = { 2, 3, 9 }
 
Output:
 
X[] = { 1, 2, 3, 4, 7 }
Y[] = { 8, 9, 10 } */

const x = [1, 4, 7, 8, 10];
const y = [2, 3, 9];

const sorted = (a1, a2) => {
  let p1 = 0;
  let p2 = 0;
  let len = a1.length;
  for (let i = p1; i < len; i++) {
    const e1 = a1[i];
    if (e1 > a2[0]) {
      // as second array is sorted then we only check whether first element is smaller , if som then swap the element of second array from the first array element
      [a1[i], a2[0]] = [a2[0], e1];
      a2.sort((a, b) => a - b); // sort the second array
    }
  }
  console.log({ a1, a2 });
};
sorted(x, y);
