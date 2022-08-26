const reverse = (x) => {
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = x * -1;
  }
  let s = "" + x;

  s = s.split("").reverse().join("");

  let num = parseInt(s) * sign;
  if (num < Math.pow(2, 31) && num >= -1 * Math.pow(2, 31)) return num;
  return 0;
};

x = 1534236469;

v = reverse(x);

console.log(v);
