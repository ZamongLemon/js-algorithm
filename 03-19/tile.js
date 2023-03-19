const solution = (n) => {
  const MOD = 1_000_000_007;
  const arr = Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 2;
  if (n <= 2) return arr[n - 1];

  for (let i = 2; i < n; i++) arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;

  return arr[n - 1];
};

console.log(solution(4));
