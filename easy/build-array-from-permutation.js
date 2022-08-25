// https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = (nums) => {
  let ans = [];
  nums.forEach((element) => {
    ans.push(nums[element]);
  });
  return ans;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
