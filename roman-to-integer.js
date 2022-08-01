// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = s.split("");
  //console.log(s + arr);
  let last = null;
  let num = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(s + " " + arr.length + " " + arr + " " + arr[i]);
    if (arr[i] === "I") {
      num += 1;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "I") {
          num += 1;
          if (i - 2 >= 0) {
            if (arr[i - 2] === "I") {
              num += 1;
              i--;
            }
          }
          i--;
        }
      }
    }

    if (arr[i] === "V") {
      num += 5;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "I") {
          num -= 1;
          i--;
        }
      }
    }

    if (arr[i] === "X") {
      num += 10;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "I") {
          num -= 1;
          i--;
        }
      }
    }

    if (arr[i] === "L") {
      num += 50;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "X") {
          num -= 10;
          i--;
        }
      }
    }

    if (arr[i] === "C") {
      num += 100;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "X") {
          num -= 10;
          i--;
        }
      }
    }

    if (arr[i] === "D") {
      num += 500;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "C") {
          num -= 100;
          i--;
        }
      }
    }

    if (arr[i] === "M") {
      num += 1000;
      if (i - 1 >= 0) {
        if (arr[i - 1] === "C") {
          num -= 100;
          i--;
        }
      }
    }
  } // end of for loop

  return num;
};

console.log(romanToInt("MCMLXXVIII") + "\n");
//console.log(romanToInt("XLIV") + "\n");
//console.log(romanToInt("XIV") + "\n");
//console.log(romanToInt("V") + "\n");
//console.log(romanToInt("IV") + "\n");
//console.log(romanToInt("III") + "\n");
//console.log(romanToInt("II") + "\n");
//console.log(romanToInt("I") + "\n");
