const solution = (k, m, score) => {
  score.sort((a, b) => b - a);
  let sum = 0;
  for (i = m - 1; i < score.length; i += m) sum += score[i] * m;
  return sum;
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
