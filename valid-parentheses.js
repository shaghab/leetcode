const isValid = (s) => {
  if (s.length <= 1) return false;

  const tracker = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      tracker.push(char);
    } else {
      let prev = tracker.pop();
      if (char === ")") {
        if (prev !== "(") return false;
      } else if (char === "]") {
        if (prev !== "[") return false;
      } else if (char === "}") {
        if (prev !== "{") return false;
      } else {
        // unacceptable character
        return false;
      }
    }
  }

  return tracker.length === 0;
};

let s = "((";

let val = isValid(s);
console.log(val);
