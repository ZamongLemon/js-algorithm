function solution(A, B) {
  var answer = -1;
  let len = B.length;
  for (let i = 0; i < len; i++) {
    if (A === B) {
      answer = i;
      break;
    }
    A = A.charAt(len - 1) + A.slice(0, len - 1);
  }
  return answer;
}
console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
