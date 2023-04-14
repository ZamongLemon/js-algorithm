const solution = (n) => {
  const div = 1000000007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = i - 4; j >= 0; j -= 2) dp[i] += dp[j] * 2;
    dp[i] %= div;
  }

  return dp[n];
};

console.log(solution(6));
