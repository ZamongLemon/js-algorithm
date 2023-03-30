function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    return common[common.length - 1] + (common[2] - common[1]);
  }
  if (common[2] / common[1] === common[1] / common[0]) {
    return common[common.length - 1] * (common[2] / common[1]);
  }
}
console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
