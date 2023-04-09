const solution = (s) => {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  let max = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      max = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      const j = i + k - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        max = k;
      }
    }
  }
  return max;
};

console.log(solution("abcdcba"));
console.log(solution("abacde"));
