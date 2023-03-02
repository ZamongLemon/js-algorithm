function solution(a, b, n) {
  var answer = 0;
  let get = Math.floor(n / a) * b;
  answer += get;
  let left = (n % a) + get;

  while (left >= a) {
    get = Math.floor(left / a) * b;
    answer += get;
    left = (left % a) + get;
  }

  return answer;
}

console.log(solution(2, 1, 20));
/* console.log(solution(3, 1, 20)); */
