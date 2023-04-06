const solution = (n, times) => {
  let left = 1;
  let right = Math.max(...times) * n;
  let answer = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let passed = times.reduce((a, t) => a + Math.floor(mid / t), 0);
    if (passed >= n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else left = mid + 1;
  }
  return answer;
};

console.log(solution(6, [7, 10]));
