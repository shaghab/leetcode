// rows = 4
// columns = 4 + 2 + 4

const convert = (s, numRows) => {
  const arrays = [];
  for (let i = 0; i < numRows; i++) {
    arrays.push([]);
  }

  let cur = 0;
  while (cur < s.length) {
    for (let i in arrays) {
      arrays[i].push(s[cur++]);
      if (cur == s.length) break;
    }
    if (cur == s.length) break;
    if (numRows > 2) {
      for (let i = arrays.length - 2; i > 0; i--) {
        arrays[i].push(s[cur++]);
        if (cur == s.length) break;
      }
    }
  }

  let val = "";
  for (let i in arrays) {
    val += arrays[i].join("");
  }

  return val;
};

s = "PAYPALISHIRING";
numRows = 3;

v = convert(s, numRows);
console.log(v);
