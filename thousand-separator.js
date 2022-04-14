// https://leetcode.com/problems/thousand-separator/

/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = (n) => {
  let chars = [...("" + n)];
  let length = chars.length;
  while (length >= 3) {
    let pos = chars.length - (length - (length % 3));
    if (pos > 0) chars.splice(pos, 0, ".");
    length -= 3;
  }
  return chars.join("");
};

// console.log(thousandSeparator(999));
// console.log(thousandSeparator(9999));
// console.log(thousandSeparator(99999));
// console.log(thousandSeparator(999999));
// console.log(thousandSeparator(999999999));
// console.log(thousandSeparator(9999999999));
