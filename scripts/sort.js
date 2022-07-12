const bubbleSort = (arr) => {
  const len = arr.length;
  let noSwap;
  for (let i = len; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      const ej = arr[j];
      const ej1 = arr[j + 1];
      if (ej > ej1) {
        [arr[j], arr[j + 1]] = [ej1, ej];
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  console.log({ arr });
  return arr;
};

const input = [1, 3, 5, 8, 6, 4, 2, 4];

//bubbleSort(input);

const selectionSort = (arr) => {
  const len = arr.length;
  let ePointer;
  for (let i = 0; i < len; i++) {
    const ei = arr[i];
    let pointer = 0;
    for (let j = i + 1; j < len; j++) {
      const ej = arr[j];
      console.log({ ei, ej });

      if (ej < ei) {
        pointer = j;
        ePointer = arr[j];
      }
    }
    if (i !== pointer) {
      [arr[i], arr[pointer]] = [ePointer, ei];
    }
  }

  console.log({ arr });
};
selectionSort(input);
