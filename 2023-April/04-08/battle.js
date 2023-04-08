const solution = (n, results) => {
  const arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  for (const [winner, loser] of results) arr[winner][loser] = true;

  for (let k = 1; k <= n; k++)
    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= n; j++) if (arr[i][k] && arr[k][j]) arr[i][j] = true;

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) if (arr[i][j] || arr[j][i]) count++;
    if (count === n - 1) answer++;
  }

  return answer;
};
