// Find a pair with the given sum in an array
// link : https://www.techiedelight.com/find-pair-with-given-sum-array/

const input = [8, 7, 2, 5, 3, 1];
const target = 10;

// Output: (8, 2) and  (7, 3)

console.clear();

const findPair = (input, sum) => {
  const op = [];
  const len = input.length;
  for (let i = 0; i < len; i++) {
    const element = input[i];
    const remains = sum - element;
    for (let j = len - 1; j > i; j--) {
      const reverse = input[j];
      if (reverse === remains) {
        op.push([input[i], input[j]]);
        break;
      }
    }
  }
  console.log({ op });
};

findPair(input, target);
