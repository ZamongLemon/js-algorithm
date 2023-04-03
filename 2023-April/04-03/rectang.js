const solution = (w, h) => {
  const g = gcd(w, h);
  return w * h - (w + h - g);
};
const gcd = (a, b) => {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
};

console.log(solution(8, 12));
console.log(solution(17, 7));
