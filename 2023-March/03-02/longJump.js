const jump = { 0: 1, 1: 1 };
const solution = (n) => {
  for (let i = 2; i <= n; i++) {
    jump[i] = (jump[i - 1] + jump[i - 2]) % 1234567;
  }
  return jump[n];
};

console.log(solution(4));
console.log(solution(3));
