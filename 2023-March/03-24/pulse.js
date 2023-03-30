function solution(sequence) {
  dp1 = Array(sequence.length).fill(0);
  dp2 = Array(sequence.length).fill(0);
  let answer = 0;
  sequence.forEach((el, idx) => {
    if (idx === 0) {
      dp1[idx] += el;
      dp2[idx] -= el;
    } else if (idx % 2 === 1) {
      dp1[idx] = Math.max(dp1[idx - 1] - el, -el);
      dp2[idx] = Math.max(dp2[idx - 1] + el, +el);
    } else {
      dp1[idx] = Math.max(dp1[idx - 1] + el, +el);
      dp2[idx] = Math.max(dp2[idx - 1] - el, -el);
    }
    answer = Math.max(answer, dp1[idx], dp2[idx]);
  });
  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4])); // 10
