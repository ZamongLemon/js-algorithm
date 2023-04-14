const solution = (targets) => {
  if (targets.length === 1) return 1;
  targets.sort((a, b) => a[1] - b[1]);
  let answer = 0;
  let prevEnd = targets[0][1] - 0.01;
  for (let i = 1; i < targets.length; i++) {
    if (targets[i][0] > prevEnd) {
      answer++;
      prevEnd = targets[i][1] - 0.01;
    }
  }
  return ++answer;
};
console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
