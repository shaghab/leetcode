/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
  if (x < -1) return false;
  let numStr = x.toString().split("");
  return numStr.join("") === numStr.reverse().join("");
};

console.log(isPalindrome(10));
