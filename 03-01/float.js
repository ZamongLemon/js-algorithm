function solution(a, b) {
  const g = (i, j) => (j === 0 ? i : g(j, i % j));
  b /= g(a, b);

  while (b % 2 == 0) b /= 2;
  while (b % 5 == 0) b /= 5;

  return b == 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
