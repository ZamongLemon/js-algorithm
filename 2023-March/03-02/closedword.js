function solution(s) {
  var answer = 0;
  const obj = [];
  var slen = s.length;
  for (let i = 0; i < slen; i++) {
    let idx = -1;
    for (let j = 0; j < i; j++) {
      if (s.charAt(j) == s.charAt(i)) idx = i - j;
    }
    obj.push(idx);
  }
  return obj;
}

console.log(solution("banana"));
console.log(solution("foobar"));
