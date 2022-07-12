/*
The program should print all the distinct combinations, while preserving the relative order of elements as they appear in the array.
Input:  {2, 3, 4}, k = 2
Output: { 2, 3 }, { 2, 4 }, { 3, 4 }
*/

const input = [2, 3, 4];
const printCombination = (input, len) => {
  console.log({ input });
  if (input.length < len) {
    return;
  }
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    console.log({ element });
    printCombination(input.slice(i), len - 1);
  }
};

printCombination(input, 2);
