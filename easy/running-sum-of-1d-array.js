// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = (nums) => {
  let sum = 0;
  let count = 0;
  nums.forEach((element) => {
    sum += element;
    nums[count] = sum;
    count++;
  });
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
