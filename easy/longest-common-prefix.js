const longestCommonPrefix = (strs) => {
  if (strs.length === 1) return strs[0];
  let min = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < min) min = strs[i].length;
  }

  let prefix = "";

  let match = true;

  for (let i = 0; i < min; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] != strs[j + 1][i]) {
        match = false;
        break;
      }
    }
    if (match) {
      prefix += strs[0][i];
    }
  }
  return prefix;
};

let strs = ["cir", "car"];
//["flower", "flow", "flight"];

let val = longestCommonPrefix(strs);
console.log(val);
