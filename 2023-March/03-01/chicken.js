function solution(chicken) {
  let answer = 0;
  let a = Math.floor(chicken / 10);
  let b = chicken % 10;
  answer = a;
  if (a + b >= 10) {
    answer += solution(a + b);
  }
  return answer;
}

console.log(solution(100));

console.log(solution(1081));
