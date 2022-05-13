const numList = [8, 7, 2, 5, 3, 1];
const summer = 10;

const findPair = (arr, target) => {
  const len = arr.length - 1;
  const outputSet = new Set();
  for (let i = 0; i <= len; i++) {
    const current = arr[i];
    let diff = target - current;
    for (let j = len; j > i; j--) {
      const ele = arr[j];
      if (diff === ele) {
        console.log('found--->');
        outputSet.add([current, ele]);
      }
    }
  }
  console.log({ outputSet });
  return outputSet;
};

// findPair(numList, summer);

// Q: find the list of subset of array with zero sum
const input = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

const zeroSum = (arr) => {
  const subset = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const current = arr[i];
    let sum = current;
    for (let j = i + 1; j < len; j++) {
      let next = arr[j];
      sum += next;
      if (sum === 0) {
        subset.add([i, j]);
      }
    }
  }
  console.log({ subset });
  return subset;
};

// zeroSum(input);
// Output: Subarray with zero-sum exists

const nonBinaryInput = [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1];

// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

const sortBinary = (arr) => {
  const arrayWithZero = arr.filter((a) => a === 0);
  const output = Array.from({ length: arr.length }, (_, i) => (i < arrayWithZero.length ? 0 : 1));
  console.log({ output });
};

// sortBinary(nonBinaryInput);


