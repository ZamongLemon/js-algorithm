const hanoi = (n, start, target, sub, result) => {
  if (n === 1) result.push([start, target]);
  else {
    hanoi(n - 1, start, sub, target, result);
    result.push([start, target]);
    hanoi(n - 1, sub, target, start, result);
  }
};
const solution = (n) => {
  answer = [];
  hanoi(n, 1, 3, 2, answer);
  return answer;
};
//console.log(solution(1));
//console.log(solution(2));
console.log(solution(4));
/*console.log(solution(4))
console.log(solution(5)) */
