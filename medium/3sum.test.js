const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("threeSum basic functionaity", () => {
  it("return [2,0] when passed []", () => {
    let expected = [];
    let actual = threeSum([2, 0]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[0,0,0]] when passed [0,0,0]", () => {
    let expected = [[0, 0, 0]];
    let actual = threeSum([0, 0, 0]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [] when passed [0,1,1]", () => {
    let expected = [];
    let actual = threeSum([0, 1, 1]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[-1,-1,2],[-1,0,1]] when passed [-1,0,1,2,-1,-4]", () => {
    let expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    let actual = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[0,0,0]] when passed [0,0,0,0]", () => {
    let expected = [[0, 0, 0]];
    let actual = threeSum([0, 0, 0, 0]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[0,0,0]] when passed [1,2,-2,-1]", () => {
    let expected = [];
    let actual = threeSum([1, 2, -2, -1]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[-2,0,2],[-2,1,1]] when passed [-2,0,1,1,2]", () => {
    let expected = [
      [-2, 0, 2],
      [-2, 1, 1],
    ];
    let actual = threeSum([-2, 0, 1, 1, 2]);
    expect(actual).is.deep.equal(expected);
  });

  it("return [[-2,-1,3],[-2,0,2],[-1,0,1]] when passed [3,0,-2,-1,1,2]", () => {
    let expected = [
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1],
    ];
    let actual = threeSum([3, 0, -2, -1, 1, 2]);
    expect(actual).is.deep.equal(expected.sort());
  });

  it("return [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]] when passed [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]", () => {
    let expected = [
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ];
    let actual = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
    expect(actual).is.deep.equal(expected.sort());
  });
});

const threeSum = function (nums) {
  if (nums.length < 3 || nums.length > 3000) return [];

  nums.sort((a, b) => {
    return a - b;
  });

  let map = {};
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]] += 1;
    else map[nums[i]] = 1;

    if (map[nums[i]] <= 3) temp.push(nums[i]);
  }

  nums = temp;

  console.log(map);

  const ret = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let v = twoSum(nums.slice(i + 1), nums[i]);
    v.forEach((e) => {
      if (e.length === 3) ret.push(e);
    });
  }

  if (ret.length <= 1) return ret;

  ret.sort();

  const ret2 = [];
  ret2.push(ret[0]);

  for (let i = 1; i < ret.length; i++) {
    if (!deepCompare(ret[i], ret[i - 1])) ret2.push(ret[i]);
  }

  return ret2.sort();
};

const twoSum = function (nums, sum) {
  const ret = [];

  let l = 0;
  let r = nums.length - 1;

  while (r > l) {
    let v = sum + nums[l] + nums[r];
    if (v === 0) {
      ret.push([sum, nums[l], nums[r]]);
      l++;
    } else if (v >= 0) {
      r--;
    } else l++;
  }
  return ret;
};

// assumes arrays are sorted
const deepCompare = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
