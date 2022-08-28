const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("intToRoman - basic functions", () => {
  it("return III when passed 3", () => {
    const expected = "III";
    const actual = intToRoman(3);
    expect(actual).to.equal(expected);
  });

  it("return VI  when passed 6", () => {
    const expected = "VI";
    const actual = intToRoman(6);
    expect(actual).to.equal(expected);
  });

  it("return LVIII when passed 58", () => {
    const expected = "LVIII";
    const actual = intToRoman(58);
    expect(actual).to.equal(expected);
  });
});

const intToRoman = (num) => {
  const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const mapper = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const ret = [];
  numerals.forEach((element) => {
    while (num >= element) {
      ret.push(element);
      num = num - element;
    }
  });

  console.log(ret);

  return ret
    .map((item) => {
      return mapper[item];
    })
    .join("");
};
