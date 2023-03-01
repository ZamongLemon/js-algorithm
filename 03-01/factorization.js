function solution(n) {
  var answer = [];

  while (true) {
    for (let i = 2; i < Infinity; i++) {
      if (n % i == 0) {
        n = n / i;
        answer.push(i);
        break;
      }
    }
    if (n == 1) break;
  }
  return [...new Set(answer)];
}
console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
