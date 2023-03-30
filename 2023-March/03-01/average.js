function solution(score) {
  var arr = [];

  const sums = score.map(([a, b]) => a + b).sort((a, b) => b - a);
  const rankMap = {};

  let idx = 0;
  sums.forEach((element) => {
    idx++;
    if (!rankMap[element]) rankMap[element] = idx;
  });
  var answer = [];
  answer = score.map((element) => {
    return rankMap[element[0] + element[1]];
  });
  return answer;
}
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80]
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30]
  ])
);
