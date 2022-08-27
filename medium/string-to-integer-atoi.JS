const myAtoi = (s) => {
  let stage = 0;
  let sign = 1;
  let num = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (stage == 0) continue;
      if (stage > 0) break;
    } else if (s[i] === "+" || s[i] === "-") {
      if (stage === 0) {
        if (s[i] === "-") {
          sign = -1;
        }
        stage = 1;
      } else if (stage > 0) break;
    } else if (isNaN(s[i])) {
      break;
    } else {
      num += s[i];
      stage = 1;
    }
  }

  num = parseInt(num);
  if (isNaN(num)) return 0;
  num *= sign;
  if (num < -1 * Math.pow(2, 31)) return -1 * Math.pow(2, 31);
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return num;
};

//const s = "   -42";
//const s = "words and 987";
let s = "-91283472332";
//const s = "2147483648";

const v = myAtoi(s);

console.log(v);
