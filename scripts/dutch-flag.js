//Given an array containing only 0’s, 1’s, and 2’s, sort it in linear time and using constant space.

const data = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]; // output would be  [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2]
const data2 = [0, 1, 1, 2, 2, 1, 0, 1, 2]; // output would be  [0, 0, 1, 1, 1, 2, 2, 2]

const arrange = (input) => {
  const pivot = 1;
  let start = 0;
  let mid = 0;
  let end = input.length - 1;
  while (mid <= end) {
    console.log({ input });
    let m = input[mid];
    let s = input[start];
    let e = input[end];
    console.log({ start, mid, end });
    if (m < pivot) {
      // is 0
      [input[start], input[mid]] = [m, s]; // swap start and mid values and
      start++; // forward start and mid pointer by 1
      mid++;
    } else if (m > pivot) {
      // is 2
      [input[end], input[mid]] = [m, e]; // swap end and mid values and
      end--; // forward end pointer by 1 i.e. decrease by 1
    } else {
      // is 1
      mid++; // forward mid pointer by next (i.e.1)
    }
  }
};

//arrange(data2);

// solution using the while
const dnf = (input) => {
  let left = 0;
  let mid = 0;
  let right = input.length - 1;
  while (mid <= right) {
    let m = input[mid];
    let l = input[left];
    let r = input[right];
		switch (m) {
			case 0:
        [input[left], input[mid]] = [m, l]; // changing the same input without new variable
        left++;
        mid++;
        break;
      case 1: // on pivot just move middle further
        mid++;
        break;
      case 2:
        [input[right], input[mid]] = [m, r];
        right--;
        break;
    }
  }
  console.log({ input });
};

dnf(data);
