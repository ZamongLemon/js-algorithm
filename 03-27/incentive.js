function solution(scores) {
  let answer = 1;
  const wanho = scores[0];
  scores.sort((a, b) => {
    return b[0] - a[0] ? b[0] - a[0] : b[1] - a[1];
  });
  let last = 0;
  for (let i = 0; i < scores.length; i++) {
    if (wanho[0] < scores[i][0] && wanho[1] < scores[i][1]) return -1;
    if (last <= scores[i][1]) {
      if (wanho[0] + wanho[1] < scores[i][0] + scores[i][1]) answer++;
      last = scores[i][1];
    }
  }
  return answer;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ])
);
