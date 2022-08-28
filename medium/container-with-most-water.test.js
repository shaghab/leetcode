const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("maxArea - basic fucntionality", () => {
  it("return 1 when passed two lines each of height 1", () => {
    const expected = 1;
    const actual = maxArea([1, 1]);
    expect(actual).to.equal(expected);
  });

  it("return 49 when passed [1,8,6,2,5,4,8,3,7]", () => {
    const expected = 49;
    const actual = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    expect(actual).to.equal(expected);
  });

  it("return 17 when passed [2,3,4,5,18,17,6]", () => {
    const expected = 17;
    const actual = maxArea([2, 3, 4, 5, 18, 17, 6]);
    expect(actual).to.equal(expected);
  });

  it("return 4 when passed [1,2,4,3]", () => {
    const expected = 4;
    const actual = maxArea([1, 2, 4, 3]);
    expect(actual).to.equal(expected);
  });

  it("return 36 when passed [2,3,10,5,7,8,9]", () => {
    const expected = 36;
    const actual = maxArea([2, 3, 10, 5, 7, 8, 9]);
    expect(actual).to.equal(expected);
  });

  it("return 24 when passed [1,3,2,5,25,24,5]", () => {
    const expected = 24;
    const actual = maxArea([1, 3, 2, 5, 25, 24, 5]);
    expect(actual).to.equal(expected);
  });
});

const area = (l, r, height) => {
  if (l >= r) return -1;
  let h = height[l] < height[r] ? height[l] : height[r];
  return (r - l) * h;
};

var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;

  let max = area(l, r, height);

  while (r - l > 0) {
    let v1 = area(l + 1, r, height);
    let v2 = area(l, r - 1, height);

    if (v1 >= v2) {
      if (v1 > max) max = v1;
    } else {
      if (v2 > max) max = v2;
    }

    if (height[l] <= height[r]) {
      l++;
    } else r--;
  }

  return max;
};
