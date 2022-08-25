/*
crude solution

check string is 

*/

const longestPalindrome = function (s) {
  // get list of possible palindromes 2 and 3

  const p2 = [];
  const p3 = [];

  let max = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      // example aa
      p2.push(i);
      if (max.length < 2) max = s[i] + s[i + 1];
    }
    if (i < s.length - 2 && s[i] === s[i + 2]) {
      // example aba
      p3.push(i);
      max = s[i] + s[i + 1] + s[i + 2];
    }
  }

  //console.log(p3.length);

  let inner = function (i, j) {
    let start = i - 1;
    let end = i + j;
    let max2 = s[i] + s[i + 1];
    if (j == 3) max2 += s[i + 2];
    while (start >= 0 && end < s.length) {
      if (s[start] === s[end]) {
        max2 = s[start] + max2 + s[end];
        if (max2.length > max.length) max = max2;
        start--;
        end++;
      } else {
        break;
      }
    }
  };

  p2.forEach((i) => {
    inner(i, 2);
  });

  p3.forEach((i) => {
    inner(i, 3);
  });

  return max;
};

/*
var longestPalindromeBrute = function (s) {
  //if (isPalindrome(s)) return s.length;
  for (let i = 0; i < s.length; i++) {
    let window = s.length - i;
    console.log(i + " " + s.length + " " + window);
    for (let j = 0; j < s.length - window + 1; j++) {
      let ss = s.slice(j, j + window);
      console.log("i:" + i + " j:" + j + " w:" + window + " ss:" + ss);
      if (ss.split("").reverse().join("") === ss) return ss;
    }
  }
};
*/

let s = "aaa";

let v = longestPalindrome(s);
console.log(v);
