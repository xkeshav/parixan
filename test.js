function giveMeColor(color) {
  return function () {
    console.log('inside return', color);
  };
}

function multiply(...input) {
  if (input.length > 1) {
    const [first, ...rest] = input;
    return function () {
      multiply(rest);
    };
  } else {
    return input[0] * 1;
  }
}
