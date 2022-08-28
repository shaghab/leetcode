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

  it("return [[-2,0,2],[-2,1,1]] when passed [-2,0,1,1,2]", () => {
    let expected = [
      [-2, 0, 2],
      [-2, 1, 1],
    ];
    let actual = threeSum([-2, 0, 1, 1, 2]);
    expect(actual).is.deep.equal(expected);
  });
});

var threeSum = function (nums) {
  if (nums.length < 3 || nums.length > 3000) return [];

  let ret = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let v = [nums[i], nums[j], nums[k]];
          v.sort();
          ret.push(v);
        }
      }
    }
  }
  console.log(ret);

  if (ret.length <= 1) return ret;

  ret.sort();
  let ret2 = [];
  ret2.push(ret[0]);

  console.log(ret);

  for (let i = 1; i < ret.length; i++) {
    if (!deepCompare(ret[i], ret[i - 1])) ret2.push(ret[i]);
  }

  console.log(ret2);
  return ret2;
};

// assumes arrays are sorted
const deepCompare = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
