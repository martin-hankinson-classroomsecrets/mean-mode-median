export const calculateMean = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += +nums[i];
  }
  return (total / nums.length).toFixed(2);
};

const compareNumbers = (a, b) => {
  return a - b;
};

export const calculateMedian = (nums) => {
  nums.sort(compareNumbers);

  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return [
      nums[Math.floor(nums.length / 2 - 1)],
      nums[Math.floor(nums.length / 2)],
    ];
  }
};

export const calculateMode = (nums) => {
  const numsObject = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObject[+nums[i]]) {
      numsObject[+nums[i]] += 1;
    } else {
      numsObject[+nums[i]] = 1;
    }
  }
  let biggestValue = -1000000;
  let biggestValueKey = -1000000;

  Object.keys(numsObject).forEach((key) => {
    let value = numsObject[key];
    if (value > biggestValue) {
      biggestValue = value;
      biggestValueKey = key;
    }
  });
  return biggestValueKey;
};
