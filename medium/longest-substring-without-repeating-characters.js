var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let set = [];

  let cur = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!set.includes(char)) {
      cur++;
      if (cur > max) max = cur;
    } else {
      set = fix(set, char);
      cur = set.length + 1; // 1 is added for current char
    }
    set.push(char);
  }

  return max;
};

let fix = function (set, char) {
  let pos = -1;
  for (let i = set.length - 1; i >= 0; i--) {
    if (set[i] === char) {
      pos = i;
      break;
    }
  }
  return set.slice(pos + 1);
};

const s = "dvdf";

const val = lengthOfLongestSubstring(s);
console.log(val);
