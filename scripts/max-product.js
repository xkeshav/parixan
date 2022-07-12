const input = [-6, 4, -5, 8, -10, 0, 8];
//The maximum product subarray is {4, -5, 8, -10} having product 1600

const maxProductSubArray = (input) => {
  let wL = 0;
  let wR = 0;
  let currProduct = 1;
  let maxProduct = -Infinity;
  for (let i = 0; i < input.length; i++) {
    const e = input[i];
    currProduct *= e;
    if (currProduct > maxProduct) {
      maxProduct = currProduct;
      wR = i;
    }
  }
  const output = input.slice(wL, wR + 1);
  console.log({ output });
};

maxProductSubArray(input);
