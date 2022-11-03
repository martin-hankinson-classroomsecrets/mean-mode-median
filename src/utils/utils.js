export const calculateMean = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += +nums[i];
  }
  return total / nums.length;
};

export const calculateMedian = (nums) => {
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return [
      nums[Math.floor(nums.length / 2 - 1)],
      nums[Math.floor(nums.length / 2)],
    ];
  }
};
