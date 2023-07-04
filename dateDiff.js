const today = new Date();

const getTime = (input = new Date()) => new Date(input).getTime();

const diffBetween = (start, end) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInMs = end - start;
  const floorDiff = Math.abs(Math.floor(diffInMs / oneDay));
  const roundDiff = Math.abs(Math.round(diffInMs / oneDay));
  console.log({ diffInMs, floorDiff, roundDiff });
};

const dateDiff = (first, second) => {
  const firstTime = getTime(first);
  const secondTime = getTime(second);
  const todayTime = getTime();

  diffBetween(firstTime, secondTime); // 1344 days
  diffBetween(firstTime, todayTime); // 2688 days
  diffBetween(secondTime, todayTime); // 1344 days
};

dateDiff();
