const compress = (s, unit) => {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < s.length; i += unit) {
    let current = s.substr(i, unit);
    let next = s.substr(i + unit, unit);
    if (current === next) count++;
    else {
      compressed += (count > 1 ? count : "") + current;
      count = 1;
    }
  }
  return compressed;
};

const solution = (s) => {
  let minLength = s.length;
  for (let unit = 1; unit <= s.length / 2; unit++) {
    let compressed = compress(s, unit);
    minLength = Math.min(minLength, compressed.length);
  }
  return minLength;
};
console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
