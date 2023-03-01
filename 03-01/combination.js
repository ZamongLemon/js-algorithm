const solution = (n, m) => {
  /*   if (m === 0 || m === n) {
    return 1n;
  }
  let a = 1n;
  for (let i = m + 1; i <= n; i++) {
    a *= i;
  }
  let b = 1n;
  for (let j = 1; j <= n - m; j++) {
    b *= j;
  }
  return a / b; */

  if (m === 0 || m === n) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= m; i++) {
    res = (res * (n - m + i)) / i;
  }
  return res;
};
console.log(solution(10, 3));
console.log(solution(10, 2));
console.log(solution(10, 5));
