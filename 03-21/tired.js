const solution = (n, works) => {
  let sum = works.reduce((a, c) => a + c, 0);
  works = works.sort((a, b) => b - a);
  if (sum <= n) return 0;
  while (n > 0) {
    n--;
    works[0]--;
    let idx = 0;
    while (works[idx] < works[idx + 1]) {
      [works[idx], works[idx + 1]] = [works[idx + 1], works[idx]];
      idx++;
    }
  }
  let answer = works.reduce((a, c) => a + c * c, 0);
  return answer;
};

console.log(solution([4, 3, 3], 4));
console.log(solution([2, 1, 2], 1));
console.log(solution([1, 1], 3));
