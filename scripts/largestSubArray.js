// Given an integer array, find the largest subarray formed by consecutive integers. The subarray should contain all distinct values.

const inputArray = [2, 1, 4, 3, 0, 0, 3];

// Output: The largest subarray is { 0, 2, 1, 4, 3 }

// const inputArray = [2, 0, 2, 0, 4, 3, 0, 0]; // output [2,0,4,3]

const lsb = (arr) => {
  let minIndex = 0;
  let maxIndex = 0;
  const hasDuplicate = arr.some((a, i, arr) => arr.indexOf(a) !== i);
  console.log({ hasDuplicate });
  if (!hasDuplicate) {
    return arr;
  } else {
    for (var i = 0; i < arr.length; i++) {
      const a = arr[i];
      const restArray = arr.slice(i + 1);
      const nextIndex = restArray.findIndex((r) => r === a);
      const len = restArray.length;
      const indexDiff = maxIndex - minIndex;
      console.log({ nextIndex, len, indexDiff });
      if (nextIndex === -1 && len > indexDiff) {
        minIndex = i;
        maxIndex = arr.length;
      } else if (nextIndex > indexDiff) {
        minIndex = i;
        maxIndex = nextIndex;
      }

      console.log({ minIndex, maxIndex });
    }
    const sliderArray = arr.slice(minIndex, maxIndex);
    console.log({ sliderArray });
    // return lsb(sliderArray);
  }
};

const largestSubArray = (arr) => {
  // first check whether array have any duplicate value
  const hasDuplicate = arr.some((a, i, arr) => arr.indexOf(a) !== i);

  // console.log({hasDuplicate});
  if (!hasDuplicate) {
    return arr;
  } else {
    const indexedArray = [];
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        let next = arr[j];
        // if having duplicate value then set the index of both element in indexedArray
        if (next === curr) {
          indexedArray.push([i, j]);
          break;
        }
        // if reach end of array and found no duplicate value
        if (j === arr.length - 1) {
          indexedArray.push([i, j]);
        }
      }
    }
    // console.log({indexedArray});
    // create new array which hold difference between duplicate value index position
    let op = [];
    for (const [i, j] of indexedArray) {
      const diff = j - i;
      op.push(diff);
    }
    // find maximum difference value
    const maxx = Math.max(...op);
    const mIndex = op.indexOf(maxx);
    // retrieve maximum difference array from indexedArray
    const [min, max] = indexedArray[mIndex];
    const output = arr.slice(min, max);
    // recursively call for next found array for the same
    return largestSubArray(output);
  }
};

const result = lsb(inputArray);

console.log({ result });
